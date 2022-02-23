<script lang="ts">
  import clsx from "clsx";

  export let value: string = undefined;
  export let label: string = undefined;
  export let size: "lg" | "md" = undefined;
</script>

<!-- Use 'span' for slot -->
<!-- https://stackoverflow.com/questions/67852559/pass-svelte-component-as-props -->
<div
  class="h-full w-full flex flex-col justify-center items-center space-y-1 sm:space-y-2 lg:space-y-3 text-center p-2"
>
  <span
    class={clsx({
      hidden: !$$slots.value && !value,
      "text-sm sm:text-md md:text-lg lg:text-2xl xl:text-3xl": !size || size === "lg",
      "text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl": size === "md"
    })}
  >
    {#if $$slots.value}
      <slot name="value" />
    {:else if value}
      {value}
    {/if}
  </span>
  <span
    class={clsx("font-lighter", {
      hidden: !$$slots.label && !label,
      "text-xs lg:text-lg xl:text-xl": !size || size === "lg",
      "text-xs lg:text-md xl:text-lg": size === "md"
    })}
  >
    {#if $$slots.label}
      <slot name="label" />
    {:else if label}
      {label}
    {/if}
  </span>
</div>
