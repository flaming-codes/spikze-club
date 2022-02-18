<script lang="ts">
  import CarbonIcon from "$lib/icon/views/CarbonIcon.svelte";

  import Icon from "@iconify/svelte";

  import clsx from "clsx";

  export let href: string;
  export let alt: string;
  export let isExternal: boolean = undefined;

  let cn: string = undefined;
  export { cn as class };
</script>

<!-- slot: -->

<a class="h-full w-full group " {href} {alt}>
  {#if isExternal}
    <CarbonIcon variant="internal-link" class="absolute top-2 right-2" />
  {/if}

  <div class={clsx("h-full w-full", cn)}>
    <slot />
  </div>
</a>
