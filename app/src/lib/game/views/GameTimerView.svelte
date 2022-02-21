<script lang="ts">
  import clsx from "clsx";
  import ProminentDisplayTitle from "$lib/display/views/ProminentDisplayTitle.svelte";

  export let hasWinner: boolean = undefined;
  export let seconds: number;
</script>

<ProminentDisplayTitle
  color="primary"
  class={clsx({
    "opacity-50": hasWinner
  })}
>
  {Math.floor(seconds / 60).toFixed(0)} : {(seconds % 60).toFixed(0)}</ProminentDisplayTitle
>
