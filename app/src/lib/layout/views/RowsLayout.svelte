<script lang="ts">
  import clsx from "clsx";

  let cn: string = undefined;
  export { cn as class };
</script>

<div class={clsx("space-y-4", cn)}>
  <slot />
</div>
