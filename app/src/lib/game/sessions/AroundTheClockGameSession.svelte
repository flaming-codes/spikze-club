<script lang="ts">
  import { aroundTheClockStores as store } from "$lib/game/stores/around-the-clock";
  import Button from "$lib/input/views/Button.svelte";
  import RowsLayout from "$lib/layout/views/RowsLayout.svelte";

  import SectionLayout from "$lib/layout/views/SectionLayout.svelte";
  import clsx from "clsx";
  import { onDestroy, onMount } from "svelte";
  import { boardNumbersNative } from "../constants/board";
  import GamePlayersRow from "../views/GamePlayersRow.svelte";
  import GameTimerView from "../views/GameTimerView.svelte";
  import GameWinnerBanner from "../views/GameWinnerBanner.svelte";

  const { players, threshold, winnerIndex, state, playerFieldMap } = store;

  const playerColors = ["bg-indigo-400", "bg-amber-400"];

  let scoreNumbers = initScoreNumbers();

  function initScoreNumbers() {
    return boardNumbersNative.map((nr) => ({
      nr,
      hits: $players.reduce((acc, cv) => {
        const next = { ...acc };
        if ($playerFieldMap[cv] === nr) {
          next[cv] = $threshold;
        }
        return next;
      }, {} as Record<string, number>)
    }));
  }

  let timer: any;

  $: if ($winnerIndex >= 0) {
    timer.stop();
    state.set("done");
  }

  const reset = (flags?: { withState?: boolean }) => () => {
    winnerIndex.set(undefined);
    timer.reset();

    scoreNumbers = initScoreNumbers();

    if (flags?.withState) $state = "setup";
  };

  const movePlayer = (params: { nrIndex: number; playerIndex: number }) => {
    const { nrIndex, playerIndex } = params;

    const name = $players[playerIndex];
    const next = [...scoreNumbers];

    // Delete old entry.
    next.forEach(({ hits }, i) => {
      if (i !== nrIndex && hits[name]) {
        delete hits[name];
      }
    });

    const { hits } = { ...next[nrIndex] };
    delete hits[name];

    // If the other player has also a score
    // at the number, the player has won.
    if (Object.values(hits).some(Boolean)) {
      $winnerIndex = playerIndex;
    }

    next[nrIndex].hits[name] = $threshold;

    scoreNumbers = [...next];
  };

  const switchPlayers = () => {
    const next = [...scoreNumbers];
    const first = next.findIndex((n) => Object.values(n.hits).length > 0);
    const second = next.findIndex((n, i) => i !== first && Object.values(n.hits).length > 0);
    const cached = { ...next[first] };

    next[first] = { ...next[second] };
    next[second] = { ...cached };

    scoreNumbers = [...next];
  };

  $: console.log("sc", scoreNumbers);
  onMount(() => {
    timer.start();
    scoreNumbers = initScoreNumbers();
  });

  onDestroy(() => {
    timer.stop();
    store.reset();
  });
</script>

<SectionLayout withHeaderSpacing withContentTopSpacing sectionTitle="Around the clock">
  <div slot="header">
    <GameTimerView bind:this={timer} />
  </div>
  <div class="mb-10">
    {#if $winnerIndex >= 0}
      <GameWinnerBanner name={$players[$winnerIndex]} onRestart={reset()} />
    {/if}
    <GamePlayersRow tuples={$players.map((name, i) => ({ name, colorClass: playerColors[i] }))} />
    <RowsLayout class="mt-8"
      ><Button variant="outline" on:click={switchPlayers}>Switch</Button></RowsLayout
    >
  </div>
</SectionLayout>

<SectionLayout sectionTitle="Scoreboard">
  <div class="flex gap-2">
    {#each scoreNumbers as { nr, hits }, nrIndex}
      <span class="flex-1 flex flex-col gap-2 justify-center">
        <button
          class={clsx("h-24 w-full rounded bg-gray-50 border-2 border-gray-100", {
            [playerColors[0]]: hits[$players[0]] === $threshold,
            "bg-slate-200": $winnerIndex >= 0 && $winnerIndex !== 0 && hits[$players[0]]
          })}
          disabled={$winnerIndex !== undefined}
          on:click={() => movePlayer({ nrIndex, playerIndex: 0 })}
        />
        <span
          class={clsx("flex-1 aspect-square  rounded grid place-content-center text-white", {
            [playerColors[0]]:
              $winnerIndex === 0 ||
              ($winnerIndex === undefined && hits[$players[0]] === $threshold),
            [playerColors[1]]:
              $winnerIndex === 1 ||
              ($winnerIndex === undefined && hits[$players[1]] === $threshold),
            ["bg-slate-300"]: !Object.values(hits).length
          })}>{nr}</span
        >
        <button
          class={clsx("h-24 w-full rounded bg-gray-50 border-2 border-gray-100", {
            [playerColors[1]]: hits[$players[1]] === $threshold,
            "bg-slate-200": $winnerIndex >= 0 && $winnerIndex !== 1 && hits[$players[1]]
          })}
          disabled={$winnerIndex !== undefined}
          on:click={() => movePlayer({ nrIndex, playerIndex: 1 })}
        />
      </span>
    {/each}
  </div>
</SectionLayout>

<SectionLayout />
