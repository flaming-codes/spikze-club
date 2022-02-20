<div class="h-full w-full flex flex-col justify-center items-center p-2">
  <span class="text-xl md:text-3xl lg:text-5xl font-medium text-center">
    <!-- Use
            <svelte:fragment slot="value">
                ...
            <svelte:fragment>
        -->
    <slot name="value" />
  </span>
</div>
