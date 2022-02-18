<!-- Use 'span' for slot -->
<!-- https://stackoverflow.com/questions/67852559/pass-svelte-component-as-props -->
<div class="h-full w-full flex flex-col justify-center items-center space-y-3">
  <span class="text-3xl">
    <slot name="value" />
  </span>
  <span class="text-xl font-lighter">
    <slot name="label" />
  </span>
</div>
