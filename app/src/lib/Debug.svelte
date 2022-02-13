<script lang="ts">
  export let activeIndex: number;
</script>

{#if activeIndex === 0}
  <slot name="0" />
{/if}

{#if activeIndex === 1}
  <slot name="1" />
{/if}
