<script lang="ts">
  import clsx from "clsx";

  export let variant: "1/1" | "2/1" | "2/2" | "4/1" | "4/2" | "4/3";
</script>

<!-- Why 'h-0' is required to re-calc height -->
<!-- even on Safari: https://github.com/tailwindlabs/tailwindcss-aspect-ratio/issues/12 -->
<div
  class={clsx({
    ["aspect-[2/1]"]: variant === "2/1" || variant === "4/2",
    ["aspect-[1/1]"]: variant === "1/1" || variant === "2/2",
    ["aspect-[4/1]"]: variant === "4/1",
    ["aspect-[4/3]"]: variant === "4/3"
  })}
>
  <div
    class={clsx("grid h-full w-full", {
      ["grid-cols-1 grid-rows-1"]: variant === "1/1",
      ["grid-cols-2 grid-rows-1"]: variant === "2/1",
      ["grid-cols-2 grid-rows-2"]: variant === "2/2",
      ["grid-cols-4 grid-rows-1"]: variant === "4/1",
      ["grid-cols-4 grid-rows-2"]: variant === "4/2",
      ["grid-cols-4 grid-rows-3"]: variant === "4/3"
    })}
  >
    <slot />
  </div>
</div>
