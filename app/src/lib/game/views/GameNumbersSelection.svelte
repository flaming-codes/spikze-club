<script lang="ts">
  import { turfWarsStore as store } from "../stores/turf-wars";
  import { buttonBaseMixin } from "$lib/input/mixins/button";
  import Button from "$lib/input/views/Button.svelte";
  import clsx from "clsx";
  import { onMount } from "svelte";
  import { boardNumbers } from "../constants/board";

  let { fields } = store;
  export let withSubmit: boolean = undefined;

  let originalFields: number[];
  onMount(() => {
    originalFields = [...$fields];
  });

  $: {
    const indexToRemove = $fields.findIndex((e) => e < 0);
    if (indexToRemove >= 0) {
      fields.update((prev) => prev.filter((_, i) => i !== indexToRemove));
    }
  }
</script>

<form class="space-y-6" on:submit|preventDefault>
  <div class="gap-4 flex">
    {#each $fields as field, i (i)}
      <select class={clsx(buttonBaseMixin)} bind:value={field}>
        {#each boardNumbers as nr}
          <option value={nr} disabled={$fields.includes(nr)}>
            {nr}
          </option>
        {/each}
        <option value={-1}>Remove</option>
      </select>
    {/each}
  </div>

  <div class="space-x-4">
    <Button
      variant="outline"
      nativeProps={{ disabled: $fields.length === 20 }}
      on:click={() => {
        fields.update((prev) => [...prev, boardNumbers.filter((nr) => !prev.includes(nr))[0]]);
      }}>Add number</Button
    >
    <Button
      variant="bare"
      on:click={() => {
        fields.set([...originalFields]);
      }}>Reset</Button
    >
    {#if withSubmit}
      <Button nativeProps={{ type: "submit", disabled: $fields.some((e) => e === undefined) }}
        >Use selection</Button
      >
    {/if}
  </div>
</form>
