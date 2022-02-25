<script lang="ts">
  // Stores first.
  import { aroundTheClockStores as store } from "$lib/game/stores/around-the-clock";

  import { browser } from "$app/env";
  import ProminentDisplayTitle from "$lib/display/views/ProminentDisplayTitle.svelte";
  import GameFieldThreshold from "$lib/game/views/GameFieldThreshold.svelte";

  import GamePlayerSelection from "$lib/game/views/GamePlayerSelection.svelte";
  import Button from "$lib/input/views/Button.svelte";
  import SectionLayout from "$lib/layout/views/SectionLayout.svelte";
  import { tick } from "svelte";
  import GameNumbersByPlayersSelection from "../views/GameNumbersByPlayersSelection.svelte";

  const { players, playerFieldMap, state, threshold } = store;

  $: isStartAllowed =
    $players.length === 2 &&
    Object.keys($playerFieldMap).length === 2 &&
    Object.values($playerFieldMap).every(Boolean);

  $: if (browser && $players && $players.length) {
    const save = async () => {
      await tick();
      localStorage.setItem("players-around-the-clock", JSON.stringify($players));
    };

    save();
  }

  $: if ($players) {
    playerFieldMap.update((prev) => {
      const keys = Object.keys(prev);
      // Filter out stale names from map.
      keys.forEach((key) => {
        if (!$players.includes(key)) delete prev[key];
      });

      // Add new one.
      $players.forEach((name) => {
        if (!keys.includes(name)) prev[name] = undefined;
      });

      return prev;
    });
  }
</script>

<SectionLayout withHeaderSpacing>
  <div slot="header">
    <ProminentDisplayTitle size="lg" color="primary">Prepare your session</ProminentDisplayTitle>
  </div>
</SectionLayout>

<SectionLayout withHeaderSpacing withContentTopSpacing sectionTitle="Players">
  <p slot="header" class="prose">Add your players. Currently supported are only 2.</p>
  <GamePlayerSelection {players} countMaxPlayers={2} />
</SectionLayout>

<SectionLayout withContentTopSpacing sectionTitle="Numbers">
  <p slot="header" class="prose">
    Choose the starting numbers on the board you want to use for this game session. Each player
    starts with the hits in the respective number.
  </p>
  <GameNumbersByPlayersSelection {playerFieldMap} />
</SectionLayout>

<SectionLayout withContentTopSpacing sectionTitle="Threshold">
  <p slot="header" class="prose">Define the threshold that's required to capture a number.</p>
  <GameFieldThreshold {threshold} min={1} />
</SectionLayout>

<SectionLayout>
  <Button
    nativeProps={{ type: "submit", disabled: !isStartAllowed }}
    on:click={() => state.set("playing")}>Start game</Button
  >
</SectionLayout>
