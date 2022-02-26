<script lang="ts">
  import { turfWarsStore as store } from "$lib/game/stores/turf-wars";

  import SectionLayout from "$lib/layout/views/SectionLayout.svelte";
  import { onDestroy, onMount } from "svelte";
  import GameNumberCounter from "../views/GameNumberCounter.svelte";
  import GamePlayersRow from "../views/GamePlayersRow.svelte";
  import GameTimerView from "../views/GameTimerView.svelte";
  import GameWinnerBanner from "../views/GameWinnerBanner.svelte";
  import clsx from "clsx";
  import { ScreenWakeLock } from "svelte-screen-wake-lock";

  const { players, fields, threshold, winnerIndex, state } = store;

  const playerColors = ["bg-indigo-400", "bg-amber-400"];

  let scores: Array<{ value: number; pointsByPlayers: number[]; leadPlayerIndex?: number }> = [];
  let timer: any;

  $: if ($winnerIndex >= 0) {
    timer?.stop();
    state.set("done");
  }

  const composeEmptyScores = () => {
    return $fields.map((value) => ({
      value,
      pointsByPlayers: $players.map((_) => 0),
      leadPlayerIndex: undefined
    }));
  };

  const increment = (params: { scoreIndex: number; playerIndex: number }) => () => {
    const { scoreIndex, playerIndex } = params;

    const next = [...scores];
    next[scoreIndex].pointsByPlayers[playerIndex] += 1;

    if (next[scoreIndex].pointsByPlayers[playerIndex] >= $threshold) {
      next[scoreIndex].pointsByPlayers = next[scoreIndex].pointsByPlayers.map((_, i) =>
        i === playerIndex ? $threshold : 0
      );
      next[scoreIndex].leadPlayerIndex = playerIndex;
    }

    scores = [...next];

    if (next.every((score) => score.leadPlayerIndex === playerIndex)) {
      winnerIndex.set(playerIndex);
    }
  };

  const reset = (flags?: { withState?: boolean }) => () => {
    winnerIndex.set(undefined);
    scores = composeEmptyScores();
    timer?.reset();

    if (flags?.withState) $state = "setup";
  };

  onMount(() => {
    scores = composeEmptyScores();
    timer?.start();
  });

  onDestroy(() => {
    timer?.stop();
    store.reset();
  });
</script>

<ScreenWakeLock />

<SectionLayout withHeaderSpacing withContentTopSpacing sectionTitle="Turf Wars">
  <div slot="header">
    <GameTimerView bind:this={timer} />
  </div>
  <div class="mb-10">
    {#if $winnerIndex >= 0}
      <GameWinnerBanner name={$players[$winnerIndex]} onRestart={reset()} />
    {/if}
    <GamePlayersRow tuples={$players.map((name, i) => ({ name, colorClass: playerColors[i] }))} />
  </div>
</SectionLayout>

<SectionLayout sectionTitle="Scoreboard">
  <div class="grid grid-cols-2 lg:grid-cols-3 gap-8">
    {#each scores as { value, pointsByPlayers, leadPlayerIndex }, scoreIndex}
      <li
        class={clsx("h-32 rounded flex items-stretch relative", {
          [["bg-indigo-100", "bg-amber-100"][leadPlayerIndex]]: leadPlayerIndex >= 0,
          "bg-slate-100": leadPlayerIndex === undefined
        })}
      >
        <GameNumberCounter
          {value}
          threshold={$threshold}
          leaderIndex={leadPlayerIndex}
          winnerIndex={$winnerIndex}
          scores={pointsByPlayers.map((p, i) => ({
            countHits: p,
            colorClass: playerColors[i],
            onClick: increment({ scoreIndex, playerIndex: i })
          }))}
        />
      </li>
    {/each}
  </div>
</SectionLayout>
