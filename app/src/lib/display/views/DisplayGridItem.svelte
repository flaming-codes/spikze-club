<script lang="ts" context="module">
  export type DisplayGridItemProps = {
    color?: "bright" | "muted" | "tinted" | "dark" | "midnight" | "black";
    isCentered?: boolean;
  };
</script>

<script lang="ts">
  import clsx from "clsx";

  export let color: DisplayGridItemProps["color"] = undefined;
  export let isCentered: DisplayGridItemProps["isCentered"] = undefined;

  let cn: string = undefined;
  export { cn as class };
</script>

<div
  class={clsx(
    "relative h-full w-full",
    {
      ["bg-gray-50"]: color === "bright",
      ["bg-gray-100"]: color === "muted",
      ["bg-gray-300"]: color === "tinted",
      ["bg-black"]: color === "black",
      ["bg-gray-900 text-gray-50"]: color === "midnight",
      ["bg-gray-600 text-gray-50"]: color === "dark",
      ["inline-flex items-center justify-center"]: isCentered
    },
    cn
  )}
>
  <slot />
</div>
