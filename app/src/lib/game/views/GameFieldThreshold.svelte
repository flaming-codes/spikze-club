<script lang="ts">
  import { turfWarsStore as store } from "../stores/turf-wars";
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";

  const { threshold } = store;
  let initalThreshold: number;

  $: if (!threshold) {
    $threshold = initalThreshold;
  }

  $: lastInputs = [$threshold, lastInputs?.[0] ?? 0];

  const animationModifier = (n: number) => {
    return lastInputs[0] - lastInputs[1] >= 0 ? n : n * -1;
  };

  onMount(() => {
    initalThreshold = $threshold;
  });
</script>

<label class="inline-flex items-center">
  {#key $threshold}
    <input
      type="number"
      bind:value={$threshold}
      min="3"
      max="10"
      in:fly={{ y: animationModifier(10) }}
    />
  {/key}
  <input type="range" bind:value={$threshold} min="3" max="10" />
</label>
