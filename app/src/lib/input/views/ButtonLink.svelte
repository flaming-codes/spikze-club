<script lang="ts">
  import CarbonIcon from "$lib/icon/views/CarbonIcon.svelte";

  import clsx from "clsx";
  import {
    buttonBaseMixin,
    buttonLinkBaseAnimationMixin,
    buttonBaseOutlineMixin,
    buttonLinkOutlineBaseAnimationMixin,
    buttonBaseColorMixin
  } from "../mixins/button";

  export let href: string;
  export let alt: string;
  export let targetVariant: "external" | "section" = undefined;
  export let isOutline: boolean = undefined;
</script>

<a
  on:mouseenter
  on:mouseleave
  {href}
  aria-label={alt}
  class={clsx(
    `${buttonBaseMixin} ${buttonLinkBaseAnimationMixin} inline-flex items-center justify-center gap-2`,
    {
      [`${buttonBaseColorMixin}`]: !isOutline,
      [`${buttonBaseOutlineMixin} ${buttonLinkOutlineBaseAnimationMixin}`]: isOutline
    }
  )}
>
  <slot />

  {#if targetVariant === "external"}
    <span>
      <CarbonIcon variant="external-link" />
    </span>
  {:else if targetVariant === "section"}
    <span>
      <CarbonIcon variant="section-link" />
    </span>
  {/if}

  {#if $$slots.icon}
    <span>
      <slot name="icon" />
    </span>
  {/if}
</a>
