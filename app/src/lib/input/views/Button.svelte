<script lang="ts">
  import clsx from "clsx";
  import {
    buttonBaseMixin,
    buttonBaseAnimationMixin,
    buttonOutlineBaseAnimationMixin,
    buttonBaseOutlineMixin,
    buttonBaseColorMixin
  } from "../mixins/button";

  export let state: "loading" = undefined;
  export let variant: "outline" | "bare" = undefined;
  export let nativeProps: svelte.JSX.HTMLAttributes<HTMLButtonElement> = undefined;

  let cn: string = undefined;
  export { cn as class };
</script>

<button
  on:click|preventDefault
  on:mouseenter
  on:mouseleave
  {...nativeProps}
  class={clsx(
    `${buttonBaseMixin} ${buttonBaseAnimationMixin} inline-flex items-center justify-center gap-2`,
    cn,
    {
      ["opacity-50 cursor-not-allowed"]: nativeProps?.disabled,
      ["animate-pulse"]: state === "loading",
      [`${buttonBaseColorMixin}`]: !variant,
      [`${buttonBaseOutlineMixin} ${buttonOutlineBaseAnimationMixin}`]: variant === "outline"
    }
  )}
>
  {#if state === "loading"}
    Loading
  {:else}
    <slot />
  {/if}

  {#if $$slots.icon}
    <span>
      <slot name="icon" />
    </span>
  {/if}
</button>
