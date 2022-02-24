<script lang="ts">
  import type { BaseGameStoreWritable } from "../stores/base";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  export let threshold: BaseGameStoreWritable["threshold"];
  export let min: number = 3;
  export let max: number = 10;

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

<label class="inline-flex items-center space-x-6">
  {#key $threshold}
    <span in:fly={{ y: animationModifier(10) }} class="min-w-[16px]">{$threshold}</span>
  {/key}
  <input type="range" bind:value={$threshold} {min} {max} />
</label>
