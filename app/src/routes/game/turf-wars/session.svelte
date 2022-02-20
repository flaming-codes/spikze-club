<script lang="ts">
  // Stores first.
  import { turfWarsStore as store } from "$lib/game/stores/turf-wars";

  import { browser } from "$app/env";
  import ProminentDisplayTitle from "$lib/display/views/ProminentDisplayTitle.svelte";
  import GameFieldThreshold from "$lib/game/views/GameFieldThreshold.svelte";

  import GameNumbersSelection from "$lib/game/views/GameNumbersSelection.svelte";
  import GamePlayerSelection from "$lib/game/views/GamePlayerSelection.svelte";
  import Button from "$lib/input/views/Button.svelte";
  import PageLayout from "$lib/layout/views/PageLayout.svelte";
  import SectionLayout from "$lib/layout/views/SectionLayout.svelte";
  import { onMount } from "svelte";

  const { players, fields, threshold, state } = store;

  $: isStartAllowed = $players.length === 2 && $fields.every(Boolean);

  onMount(() => {
    if (!browser) {
      return;
    }

    // Restore common values.
    players.set(JSON.parse(localStorage.getItem("players") || "[]"));
  });
</script>

<PageLayout>
  {#if $state === "setup"}
    <SectionLayout withHeaderSpacing>
      <div slot="header">
        <ProminentDisplayTitle size="lg" color="primary">Prepare you session</ProminentDisplayTitle>
      </div>
    </SectionLayout>
    <SectionLayout withHeaderSpacing withContentTopSpacing sectionTitle="Numbers">
      <p slot="header" class="prose">
        Choose the numbers on the board you want to use for this game session. To remove a number,
        simply select the last option from its dropdown.
      </p>
      <GameNumbersSelection />
    </SectionLayout>
    <SectionLayout withContentTopSpacing sectionTitle="Players">
      <p slot="header" class="prose">Add your players. Currently supported are only 2.</p>
      <GamePlayerSelection />
    </SectionLayout>
    <SectionLayout withContentTopSpacing sectionTitle="Threshold">
      <p slot="header" class="prose">Define the threshold that's required to capture a number.</p>
      <GameFieldThreshold />
    </SectionLayout>
    <SectionLayout>
      <Button nativeProps={{ type: "submit", disabled: !isStartAllowed }}>Start game</Button>
    </SectionLayout>
  {/if}
</PageLayout>
