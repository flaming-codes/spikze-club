<script lang="ts">
  export let title: string;
  export let subtitle: string;
  export let paragraph: string = undefined;
</script>

<div class="flex flex-col justify-end h-40">
  <h3 class="text-5xl font-bold mb-2 text-yellow-300">{title}</h3>
  <h4 class="text-2xl text-gray-700">{subtitle}</h4>
  {#if paragraph}
    <p class="mt-10 text-gray-500">{paragraph}</p>
  {/if}
</div>
