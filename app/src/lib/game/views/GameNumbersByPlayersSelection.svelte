<script lang="ts">
  import type { GameStoreWritable } from "$lib/game/stores/base";
  import clsx from "clsx";
  import { boardNumbersAsc } from "../constants/board";
  import { buttonBaseMixin } from "$lib/input/mixins/button";

  export let playerFieldMap: GameStoreWritable["playerFieldMap"];

  $: fields = Object.values($playerFieldMap);

  $: if (fields.some((nr) => nr === undefined)) {
    const keys = Object.keys($playerFieldMap);

    const i = fields.findIndex((nr) => nr === undefined);
    const numbers = boardNumbersAsc.filter((nr) => !fields.includes(nr));
    const randomIndex = Math.floor(Math.random() * numbers.length);

    console.log("- ri", randomIndex, "i", i, "nrs", numbers);

    playerFieldMap.update((prev) => ({
      ...prev,
      [keys[i]]: numbers[randomIndex]
    }));
  }
</script>

<div class="flex gap-4">
  {#each Object.entries($playerFieldMap) as [name, nr] (name)}
    <span class="flex flex-col space-y-2 items-end">
      <select
        id={name}
        class={clsx(buttonBaseMixin)}
        value={nr}
        on:change={(ev) => {
          playerFieldMap.update((prev) => ({ ...prev, [name]: Number(ev.currentTarget.value) }));
        }}
      >
        {#each boardNumbersAsc as nr}
          <option value={nr} disabled={fields.includes(nr)}>
            {nr}
          </option>
        {/each}
      </select>
      <label class="text-sm text-gray-500" for={name}>{name}</label>
    </span>
  {/each}
</div>
