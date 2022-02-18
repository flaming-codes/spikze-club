<script lang="ts">
  import clsx from "clsx";
  import {
    buttonBaseMixin,
    buttonBaseAnimationMixin,
    buttonOutlineBaseAnimationMixin,
    buttonBaseOutlineMixin,
    buttonBaseColorMixin
  } from "../mixins/button";

  export let nativeButtonProps: any = {};
  export let role = "button";
  export let state: "loading" = undefined;
  export let isOutline: boolean = undefined;
</script>

<button
  {...nativeButtonProps}
  on:click
  on:mouseenter
  on:mouseleave
  {role}
  class={clsx(
    `${buttonBaseMixin} ${buttonBaseAnimationMixin} inline-flex items-center justify-center`,
    {
      ["animate-pulse"]: state === "loading",
      [`${buttonBaseColorMixin}`]: !isOutline,
      [`${buttonBaseOutlineMixin} ${buttonOutlineBaseAnimationMixin}`]: isOutline
    }
  )}
>
  {#if state === "loading"}
    Loading
  {:else}
    <slot />
  {/if}
</button>
