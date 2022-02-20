<script lang="ts">
  import { turfWarsStore as store } from "../stores/turf-wars";
  import { onMount } from "svelte";

  const { threshold } = store;
  let initalThreshold: number;

  $: if (!threshold) {
    $threshold = initalThreshold;
  }

  onMount(() => {
    initalThreshold = $threshold;
  });
</script>

<label class="inline-flex items-center">
  <input type="number" bind:value={$threshold} min="3" max="10" />
  <input type="range" bind:value={$threshold} min="3" max="10" />
</label>
