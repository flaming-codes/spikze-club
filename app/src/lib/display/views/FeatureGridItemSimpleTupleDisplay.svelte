<!-- Use 'span' for slot -->
<!-- https://stackoverflow.com/questions/67852559/pass-svelte-component-as-props -->
<div class="h-full w-full flex flex-col justify-center items-center space-y-3">
  <slot name="value" class="text-3xl font-medium" />
  <slot name="label" class="text-lg" />
</div>
