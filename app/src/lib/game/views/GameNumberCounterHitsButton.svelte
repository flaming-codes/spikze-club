<script lang="ts">
  import CarbonIcon from "$lib/icon/views/CarbonIcon.svelte";
  import { scale } from "svelte/transition";
  import clsx from "clsx";

  export let countHits: number;
  export let alignment: "start" | "end";
  export let disabled: boolean = undefined;
  export let state: "lost" = undefined;

  let cn: string = undefined;
  export { cn as class };
</script>

<button
  on:click
  {disabled}
  class={clsx("flex-1 flex p-2 items-stretch", {
    "justify-end": alignment === "end"
  })}
>
  <div class="flex flex-col-reverse items-center gap-1">
    <div
      class={clsx("scale-75 md:scale-90 lg:scale-100 rounded-full text-white", {
        [cn]: state !== "lost",
        "bg-gray-400": state === "lost",
        "opacity-40": disabled
      })}
    >
      {#if $$slots.icon}
        <slot name="icon" />
      {:else}
        <CarbonIcon variant="add-circle" />
      {/if}
    </div>
    {#each Array.from({ length: countHits }) as _}
      <div
        class={clsx("rounded-full h-3 w-3", {
          [cn]: state !== "lost",
          "bg-gray-400": state === "lost"
        })}
        transition:scale
      />
    {/each}
  </div>
</button>
