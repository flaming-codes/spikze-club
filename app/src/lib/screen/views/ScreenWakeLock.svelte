<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  export let withLockOnMount: boolean = undefined;
  export let withUnlockOnMount: boolean = undefined;

  // The wake lock sentinel.
  let wakeLock = null;

  // Function that attempts to request a screen wake lock.
  export const requestWakeLock = async () => {
    try {
      wakeLock = await (navigator as any).wakeLock.request();
      wakeLock.addEventListener("release", () => {
        console.log("Screen Wake Lock released:", wakeLock.released);
      });
      console.log("Screen Wake Lock released:", wakeLock.released);
    } catch (err) {
      console.error(`${err.name}, ${err.message}`);
    }
  };

  export const release = () => {
    wakeLock.release();
    wakeLock = null;
  };

  const handleVisibilityChange = async () => {
    if (wakeLock !== null && document.visibilityState === "visible") {
      await requestWakeLock();
    }
  };

  onMount(async () => {
    if (withLockOnMount) await requestWakeLock();
    document.addEventListener("visibilitychange", handleVisibilityChange);
  });

  onDestroy(() => {
    if (withUnlockOnMount) release();
    document.removeEventListener("visibilitychange", handleVisibilityChange);
  });
</script>
