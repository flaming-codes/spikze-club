<script lang="ts">
  import Icon from "@iconify/svelte";
  import clsx from "clsx";

  // Using a link so that 'clsx' can eliminate
  // all other variant compared to an enum, which
  // should lead to a smaller size at runtime.
  export let variant: "internal-link" | "external-link";

  let cn: string = undefined;
  export { cn as class };
</script>

<Icon
  icon={clsx({
    "carbon:arrow-right": variant === "internal-link",
    "carbon:arrow-up-right": variant === "external-link"
  })}
  class={cn}
/>
