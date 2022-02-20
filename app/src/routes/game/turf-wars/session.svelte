<script lang="ts">
  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);
  let fields: number[] = [20, 16, 15];

  function handleSubmit() {
    alert(`answered question`);
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  {#each fields as field, i (i)}
    <select bind:value={field}>
      {#each numbers as nr}
        <option value={nr} disabled={fields.includes(nr)}>
          {nr}
        </option>
      {/each}
    </select>
  {/each}

  <button
    disabled={fields.length === 20}
    on:click={() => {
      fields = [...fields, numbers.filter((nr) => !fields.includes(nr))[0]];
    }}>Add number</button
  >

  <button disabled={fields.some((e) => e === undefined)} type="submit">Start</button>
</form>
