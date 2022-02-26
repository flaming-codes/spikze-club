<script lang="ts">
  import { aroundTheClockStores as store } from "$lib/game/stores/around-the-clock";
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
          goto(Route.AtcSessionSetup);
          break;
        case "playing":
        case "done":
          goto(Route.AtcSessionPlay);
          break;
        default:
          throw Error("unsupported state");
      }
    } catch (e) {
      error = e;
    }
  }

  onMount(async () => {
    await restoreItems<string>({ key: "players-around-the-clock", resolver: players.set });
  });
</script>

{#if error}
  {error}
{/if}

<slot />
