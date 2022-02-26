<script lang="ts">
  import clsx from "clsx";
  import GameNumberCounterHitsButton from "./GameNumberCounterHitsButton.svelte";
  import { fly } from "svelte/transition";

  export let value: number;
  export let threshold: number;
  /** Array of players' relevant data for this component. */
  export let scores: { countHits: number; colorClass: string; onClick: () => void }[];

  /** Currently leading player for this number. */
  export let leaderIndex: number = undefined;
  /** Overall game session winner flag. */
  export let winnerIndex: number = undefined;

  $: hasLeader = leaderIndex >= 0;
  $: hasWinner = winnerIndex >= 0;
  $: leaderClass = scores.find((s) => s.countHits >= threshold)?.colorClass;
</script>

<div
  class={clsx(
    "absolute inset-0 flex flex-col justify-center items-center text-4xl font-bold pointer-events-none"
  )}
>
  {#key leaderIndex}
    {#if hasLeader}
      <span class={clsx("h-1 w-6 rounded", leaderClass)} in:fly={{ y: 10 }} />
    {/if}
    {value}
    {#if hasLeader}
      <span class={clsx("h-1 w-6 rounded", leaderClass)} in:fly={{ y: -10 }} />
    {/if}
  {/key}
</div>

{#each scores as { countHits, colorClass, onClick }, i}
  <GameNumberCounterHitsButton
    {countHits}
    class={colorClass}
    alignment={i % 2 ? "end" : "start"}
    disabled={hasWinner || i === leaderIndex}
    state={hasWinner && winnerIndex !== i ? "lost" : undefined}
    on:click={onClick}
  />
{/each}
