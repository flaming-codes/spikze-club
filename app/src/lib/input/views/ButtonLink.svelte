<script lang="ts">
  import CarbonIcon from "$lib/icon/views/CarbonIcon.svelte";
  import type { Route } from "$lib/nav/models/routes";

  import clsx from "clsx";
  import {
    buttonBaseMixin,
    buttonLinkBaseAnimationMixin,
    buttonBaseOutlineMixin,
    buttonLinkOutlineBaseAnimationMixin,
    buttonBaseColorMixin
  } from "../mixins/button";

  export let href: string | Route;
  export let alt: string;
  export let targetVariant: "external" | "section" = undefined;
  export let variant: "outline" | "bare" = undefined;
</script>

<a
  on:mouseenter
  on:mouseleave
  {href}
  aria-label={alt}
  rel={targetVariant === "external" ? "external" : undefined}
  target={targetVariant === "external" ? "_blank" : undefined}
  class={clsx(
    `${buttonBaseMixin} ${buttonLinkBaseAnimationMixin} inline-flex items-center justify-center gap-2`,
    {
      [`${buttonBaseColorMixin}`]: !variant,
      [`${buttonBaseOutlineMixin} ${buttonLinkOutlineBaseAnimationMixin}`]: variant === "outline"
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
