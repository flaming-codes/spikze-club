<script lang="ts">
  import clsx from "clsx";

  export let color: "primary" | "muted" = undefined;
  export let alignment: "start" | "center" | "end" = "center";
  export let size: "lg" | "xl" = undefined;
</script>

<span
  class={clsx("font-bold", {
    ["text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"]: !size || size === "xl",
    ["text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"]: size === "lg",
    ["text-gray-50"]: !color,
    ["text-primary"]: color === "primary",
    ["text-primary-muted"]: color === "muted",
    ["text-left"]: alignment === "start",
    ["text-right"]: alignment === "end",
    ["text-center"]: alignment === "center"
  })}
>
  <slot />
</span>
