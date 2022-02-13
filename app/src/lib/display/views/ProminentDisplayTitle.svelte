<script lang="ts">
  import clsx from "clsx";

  export let color: "primary" = undefined;
</script>

<span
  class={clsx("text-4xl lg:text-5xl xl:text-6xl font-bold text-right", {
    ["text-gray-50"]: !color,
    ["text-primary"]: color === "primary"
  })}
>
  <slot />
</span>
