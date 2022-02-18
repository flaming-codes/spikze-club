<script lang="ts">
  export let value: string = undefined;
  export let label: string = undefined;
</script>

<!-- Use 'span' for slot -->
<!-- https://stackoverflow.com/questions/67852559/pass-svelte-component-as-props -->
<div class="h-full w-full flex flex-col justify-center items-center space-y-3 text-center">
  <span class="text-xl md:text-2xl lg:text-3xl">
    {#if $$slots.value}
      <slot name="value" />
    {:else}
      {value}
    {/if}
  </span>
  <span class="text-lg md:text-xl font-lighter">
    {#if $$slots.label}
      <slot name="label" />
    {:else}
      {label}
    {/if}
  </span>
</div>
