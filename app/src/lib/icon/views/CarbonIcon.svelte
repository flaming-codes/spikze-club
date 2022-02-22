<!--
  Source: https://carbon-icons-svelte.onrender.com/
-->
<script lang="ts">
  // Using a link so that 'clsx' can eliminate
  // all other variant compared to an enum, which
  // should lead to a smaller size at runtime.
  export let variant: "internal-link" | "external-link" | "section-link" | "close" | "add-circle";

  let cn: string = undefined;
  export { cn as class };
</script>

{#if variant === "external-link"}
  {#await import("carbon-icons-svelte/lib/ArrowUpRight20") then Icon}
    <Icon.default class={cn} />
  {/await}
{/if}

{#if variant === "internal-link"}
  {#await import("carbon-icons-svelte/lib/ArrowRight20") then Icon}
    <Icon.default class={cn} />
  {/await}
{/if}

{#if variant === "section-link"}
  {#await import("carbon-icons-svelte/lib/ArrowDown20") then Icon}
    <Icon.default class={cn} />
  {/await}
{/if}

{#if variant === "close"}
  {#await import("carbon-icons-svelte/lib/Close20") then Icon}
    <Icon.default class={cn} />
  {/await}
{/if}

{#if variant === "add-circle"}
  {#await import("carbon-icons-svelte/lib/AddAlt20") then Icon}
    <Icon.default class={cn} />
  {/await}
{/if}
