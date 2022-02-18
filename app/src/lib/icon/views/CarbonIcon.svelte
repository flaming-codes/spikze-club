<script lang="ts">
  // Using a link so that 'clsx' can eliminate
  // all other variant compared to an enum, which
  // should lead to a smaller size at runtime.
  export let variant: "internal-link" | "external-link";

  let cn: string = undefined;
  export { cn as class };
</script>

{#if variant === "internal-link"}
  {#await import("carbon-icons-svelte/lib/ArrowUpRight20") then Icon}
    <Icon.default class={cn} />
  {/await}
{/if}

{#if variant === "external-link"}
  {#await import("carbon-icons-svelte/lib/ArrowRight20") then Icon}
    <Icon.default class={cn} />
  {/await}
{/if}
