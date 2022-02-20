<script lang="ts">
  import { turfWarsStore as store } from "$lib/game/stores/turf-wars";

  import ProminentDisplayTitle from "$lib/display/views/ProminentDisplayTitle.svelte";
  import SectionLayout from "$lib/layout/views/SectionLayout.svelte";
  import clsx from "clsx";
  import { onDestroy, onMount } from "svelte";
  import CarbonIcon from "$lib/icon/views/CarbonIcon.svelte";
  import Button from "$lib/input/views/Button.svelte";
  import ButtonLink from "$lib/input/views/ButtonLink.svelte";

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

  const reset = () => {
    winnerIndex.set(undefined);
    scores = composeEmptyScores();
    seconds = 0;
    clearInterval(interval);
    interval = setInterval(() => (seconds += 1), 1_000);
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
  <!--
    <div slot="header">
    <ProminentDisplayTitle color="primary">Turf Wars</ProminentDisplayTitle>
  </div>
-->
  <div slot="header">
    <ProminentDisplayTitle
      color="primary"
      class={clsx({
        "scale-50 duration-500 ease-in-out": Boolean($winnerIndex)
      })}
    >
      {Math.floor(seconds / 60).toFixed(0)} : {(seconds % 60).toFixed(0)}</ProminentDisplayTitle
    >
  </div>

  <div class="mb-10">
    {#if $winnerIndex >= 0}
      <div class="mb-10 space-y-4">
        <p class="text-4xl font-bold mt-2">{$players[$winnerIndex]} has won!</p>
        <div class="space-x-2">
          <Button class={playerColors[$winnerIndex]} on:click={reset}>Start again</Button>
          <ButtonLink href="/game" alt="Go back to all games" variant="outline"
            >Back to games</ButtonLink
          >
        </div>
      </div>
    {/if}

    <ul class="flex gap-6">
      {#each $players as player, i}
        <li>
          <div class="h-full inline-flex items-center space-x-2">
            <div class={clsx("h-3 w-3", playerColors[i])} />
            <span class="text-md">{player}</span>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</SectionLayout>

<SectionLayout sectionTitle="Scoreboard">
  <div class="grid grid-cols-2 lg:grid-cols-3 gap-8">
    {#each scores as { value, pointsByPlayers, leadPlayerIndex }, scoreIndex}
      <li class="h-32 rounded flex items-stretch bg-slate-100 relative">
        <div
          class="absolute inset-0 flex flex-col justify-center items-center text-2xl pointer-events-none"
        >
          <span
            class={clsx("h-1 w-6 rounded", {
              hidden: leadPlayerIndex === undefined,
              [playerColors[leadPlayerIndex]]: leadPlayerIndex !== undefined
            })}
          />
          {value}
          <span
            class={clsx("h-1 w-6 rounded", {
              hidden: leadPlayerIndex === undefined,
              [playerColors[leadPlayerIndex]]: leadPlayerIndex !== undefined
            })}
          />
        </div>

        <button
          class="flex-1 flex p-2 items-stretch"
          disabled={pointsByPlayers[0] >= $threshold || $winnerIndex >= 0}
          on:click={increment({ scoreIndex, playerIndex: 0 })}
        >
          <div class="flex flex-col-reverse items-center gap-1">
            <div
              class={clsx(
                "scale-75 md:scale-90 lg:scale-100 rounded-full text-white",
                playerColors[0],
                {
                  "opacity-40": pointsByPlayers[0] >= $threshold
                }
              )}
            >
              <CarbonIcon variant="add-circle" />
            </div>
            {#each Array.from({ length: pointsByPlayers[0] }) as _}
              <div class={clsx("rounded-full h-3 w-3", playerColors[0])} />
            {/each}
          </div>
        </button>

        <button
          class="flex-1 flex p-2 items-stretch justify-end"
          disabled={pointsByPlayers[1] >= $threshold || $winnerIndex >= 0}
          on:click={increment({ scoreIndex, playerIndex: 1 })}
        >
          <div class="flex flex-col-reverse items-center gap-1">
            <div
              class={clsx(
                "scale-75 md:scale-90 lg:scale-100 rounded-full text-white",
                playerColors[1],
                {
                  "opacity-40": pointsByPlayers[1] >= $threshold
                }
              )}
            >
              <CarbonIcon variant="add-circle" />
            </div>
            {#each Array.from({ length: pointsByPlayers[1] }) as _}
              <div class={clsx("rounded-full h-3 w-3", playerColors[1])} />
            {/each}
          </div>
        </button>
      </li>
    {/each}
  </div>
</SectionLayout>
