<script lang="ts">
  import { turfWarsStore as store } from "$lib/game/stores/turf-wars";
  import { restoreItems } from "$lib/game/models/restore";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { Route } from "$lib/nav/models/routes";

  const { players, state } = store;

  let error: Error = undefined;

  $: {
    try {
      switch ($state) {
        case "setup":
          goto(Route.TurfWarsSessionSetup);
          break;
        case "playing":
        case "done":
          goto(Route.TurfWarsSessionPlay);
          break;
        default:
          throw Error("unsupported state");
      }
    } catch (e) {
      error = e;
    }
  }

  onMount(async () => {
    await restoreItems<string>({ key: "players-turf-wars", resolver: players.set });
  });
</script>

{#if error}
  {error}
{/if}

<slot />
