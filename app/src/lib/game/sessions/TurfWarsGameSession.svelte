<script lang="ts">
  import { turfWarsStore as store } from "$lib/game/stores/turf-wars";

  import SectionLayout from "$lib/layout/views/SectionLayout.svelte";
  import { onDestroy, onMount } from "svelte";
  import GameNumberCounter from "../views/GameNumberCounter.svelte";
  import GamePlayersRow from "../views/GamePlayersRow.svelte";
  import GameTimerView from "../views/GameTimerView.svelte";
  import GameWinnerBanner from "../views/GameWinnerBanner.svelte";

  const { players, fields, threshold, winnerIndex, state } = store;

  const playerColors = ["bg-indigo-400", "bg-amber-400"];

  let scores: Array<{ value: number; pointsByPlayers: number[]; leadPlayerIndex?: number }> = [];
  let seconds = 0;
  // Assigned in 'onMount', else 'seconds'
  // get reset to 0 as well.
  let interval: NodeJS.Timer;

  $: if ($winnerIndex >= 0) {
    clearInterval(interval);
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
    seconds = 0;
    clearInterval(interval);
    interval = setInterval(() => (seconds += 1), 1_000);

    if (flags?.withState) $state = "setup";
  };

  onMount(() => {
    scores = composeEmptyScores();
    interval = setInterval(() => (seconds += 1), 1_000);
  });

  onDestroy(() => {
    clearInterval(interval);
    store.reset();
  });
</script>

<SectionLayout withHeaderSpacing withContentTopSpacing sectionTitle="Turf Wars">
  <div slot="header">
    <GameTimerView {seconds} hasWinner={$winnerIndex >= 0} />
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
      <li class="h-32 rounded flex items-stretch bg-slate-100 relative">
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
