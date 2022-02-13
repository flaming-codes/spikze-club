<script lang="ts">
  import clsx from "clsx";

  export let color: "bright" | "muted" | "tinted" | "dark" | "midnight" = undefined;
  export let isCentered: boolean = undefined;
</script>

<div
  class={clsx("h-full w-full", {
    ["bg-gray-50"]: color === "bright",
    ["bg-gray-100"]: color === "muted",
    ["bg-gray-300"]: color === "tinted",
    ["bg-gray-900 text-gray-50"]: color === "midnight",
    ["bg-gray-600 text-gray-50"]: color === "dark",
    ["inline-flex items-center justify-center"]: isCentered
  })}
>
  <slot />
</div>

<!--
  
    {clsx("h-full w-full", {
      ["bg-gray-50"]: color === "bright",
      ["bg-gray-100"]: color === "muted",
      ["bg-gray-300"]: color === "tinted",
      ["bg-gray-900 text-gray-50"]: color === "midnight",
      ["bg-gray-600 text-gray-50"]: color === "dark",
      ["inline-flex items-center justify-center"]: isCentered
    })}
  
  -->
