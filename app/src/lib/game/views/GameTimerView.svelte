<script lang="ts">
  import clsx from "clsx";
  import ProminentDisplayTitle from "$lib/display/views/ProminentDisplayTitle.svelte";

  let seconds = 0;
  // Assigned in 'onMount', else 'seconds'
  // get reset to 0 as well.
  let interval: NodeJS.Timer;
  let state: "playing" | "stopped";

  export const start = () => {
    state = "playing";
    interval = setInterval(() => (seconds += 1), 1_000);
  };

  export const stop = () => {
    clearInterval(interval);
    state = "stopped";
  };

  export const reset = () => {
    clearInterval(interval);
    state = "playing";
    seconds = 0;

    start();
  };
</script>

<ProminentDisplayTitle
  color="primary"
  class={clsx({
    "opacity-50": state === "stopped"
  })}
>
  {Math.floor(seconds / 60).toFixed(0)} : {(seconds % 60).toFixed(0)}</ProminentDisplayTitle
>
