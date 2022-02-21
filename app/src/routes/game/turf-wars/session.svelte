<script lang="ts">
  // Stores first.
  import { turfWarsStore as store } from "$lib/game/stores/turf-wars";

  import { browser } from "$app/env";
  import PageLayout from "$lib/layout/views/PageLayout.svelte";
  import { onMount, tick } from "svelte";
  import TurfWarsGameSetup from "$lib/game/setups/TurfWarsGameSetup.svelte";
  import TurfWarsGameSession from "$lib/game/sessions/TurfWarsGameSession.svelte";

  const { players, state } = store;

  onMount(async () => {
    if (!browser) return;
    // Restore common values.
    await tick();
    players.set(JSON.parse(localStorage.getItem("players-turf-wars") || "[]"));
  });
</script>

<PageLayout>
  {#if $state === "setup"}
    <TurfWarsGameSetup />
  {/if}
  {#if $state === "playing" || $state === "done"}
    <TurfWarsGameSession />
  {/if}
</PageLayout>
