<script lang="ts">
  import Icon from "@iconify/svelte";
  import clsx from "clsx";
  import {
    buttonBaseMixin,
    buttonLinkBaseAnimationMixin,
    buttonBaseOutlineMixin,
    buttonLinkOutlineBaseAnimationMixin
  } from "../mixins/button";

  export let href: string;
  export let alt: string;
  export let isExternal: boolean = undefined;
  export let isOutline: boolean = undefined;
</script>

<a
  on:mouseenter
  on:mouseleave
  {href}
  aria-label={alt}
  class={clsx(
    `${buttonBaseMixin} ${buttonLinkBaseAnimationMixin} inline-flex items-center justify-center`,
    {
      [`${buttonBaseOutlineMixin} ${buttonLinkOutlineBaseAnimationMixin}`]: isOutline
    }
  )}
>
  <slot />

  {#if isExternal}
    <span>
      <Icon icon="carbon:arrow-up-right" className="ml-4" />
    </span>
  {/if}

  {#if $$slots.icon}
    <span class="ml-4">
      <slot name="icon" />
    </span>
  {/if}
</a>
