<script lang="ts">
  import clsx from "clsx";

  export let color: "primary" = undefined;
  export let alignment: "start" | "center" | "end" = "center";
</script>

<span
  class={clsx("text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold", {
    ["text-gray-50"]: !color,
    ["text-primary"]: color === "primary",
    ["text-left"]: alignment === "start",
    ["text-right"]: alignment === "end",
    ["text-center"]: alignment === "center"
  })}
>
  <slot />
</span>
