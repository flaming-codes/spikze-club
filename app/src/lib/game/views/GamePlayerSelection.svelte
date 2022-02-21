<script lang="ts">
  import { turfWarsStore as store } from "../stores/turf-wars";
  import CarbonIcon from "$lib/icon/views/CarbonIcon.svelte";
  import Button from "$lib/input/views/Button.svelte";

  const { players } = store;
  export let countMaxPlayers = 2;

  let nextPlayer: string = undefined;

  const addPlayer = () => {
    if ($players.includes(nextPlayer)) {
      return;
    }

    players.update((prev) => [...prev, nextPlayer.toUpperCase()]);
    nextPlayer = undefined;
  };

  const removePlayer = (indexToRemove: number) => {
    players.update((prev) => [...prev.filter((_, i) => i !== indexToRemove)]);
  };
</script>

<form class="space-y-6" on:submit|preventDefault>
  <div class="gap-4 flex">
    {#each $players as player, i (player)}
      <Button variant="bare" on:click={() => removePlayer(i)}>
        {player}
        <CarbonIcon slot="icon" variant="close" />
      </Button>
    {:else}
      <p class="opacity-30">No players added yet</p>
    {/each}
  </div>

  {#if nextPlayer !== undefined}
    <form on:submit|preventDefault={addPlayer}>
      <input autofocus class="uppercase" placeholder="Enter name..." bind:value={nextPlayer} />
    </form>
  {/if}

  <div class="space-x-4">
    <Button
      variant="outline"
      nativeProps={{ disabled: $players.length === countMaxPlayers }}
      on:click={() => {
        nextPlayer = "";
      }}>Add player</Button
    >
  </div>
</form>
