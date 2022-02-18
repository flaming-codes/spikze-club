<script lang="ts">
  import clsx from "clsx";

  export let label: string = undefined;
  export let alignment: "start" | "end" = undefined;
</script>

<div
  class={clsx("h-full left-0 flex justify-center items-center w-[200%]", {
    "-translate-x-1/2": alignment === "end"
  })}
>
  {#if $$slots.label}
    <slot name="label" />
  {:else}
    <span class="text-9xl font-bold">
      {label}
    </span>
  {/if}
</div>
