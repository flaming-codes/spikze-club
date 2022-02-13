<script lang="ts">
  import clsx from "clsx";

  export let withoutBottomPadding: boolean = undefined;
</script>

<div
  class={clsx("max-w-7xl mx-auto sm:pl-28 2xl:pl-0", {
    ["pb-40"]: !withoutBottomPadding
  })}
>
  <slot />
</div>
