<script lang="ts">
  import clsx from "clsx";

  export let withoutBottomPadding: boolean = undefined;
  export let withTopPadding: boolean = undefined;
</script>

<div
  class={clsx("max-w-7xl mx-auto sm:p-10 2xl:pl-0", {
    ["pb-40"]: !withoutBottomPadding,
    ["pt-20"]: withTopPadding
  })}
>
  <slot />
</div>
