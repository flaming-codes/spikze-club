<script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit";

  export const prerender = true;

  export const fetch: Load = async () => ({
    status: 200,
    maxage: 60 * 60 * 24
  });
</script>

<script lang="ts">
  // Stores first.
  import { aroundTheClockStores as store } from "$lib/game/stores/around-the-clock";

  import PageLayout from "$lib/layout/views/PageLayout.svelte";
  import { onMount } from "svelte";
  import TurfWarsGameSetup from "$lib/game/setups/TurfWarsGameSetup.svelte";
  import TurfWarsGameSession from "$lib/game/sessions/TurfWarsGameSession.svelte";
  import { restoreItems } from "$lib/game/models/restore";
  import AroundTheClockGameSession from "$lib/game/sessions/AroundTheClockGameSession.svelte";
  import AroundTheClockGameSetup from "$lib/game/setups/AroundTheClockGameSetup.svelte";

  const { players, state } = store;

  onMount(async () => {
    await restoreItems<string>({ key: "players-around-the-clock", resolver: players.set });
  });
</script>

<PageLayout>
  {#if $state === "setup"}
    <AroundTheClockGameSetup />
  {/if}
  {#if $state === "playing" || $state === "done"}
    <AroundTheClockGameSession />
  {/if}
</PageLayout>
