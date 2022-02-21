<script lang="ts">
  import Button from "$lib/input/views/Button.svelte";
  import ButtonLink from "$lib/input/views/ButtonLink.svelte";
  import { fly } from "svelte/transition";

  export let name: string;
  export let onRestart: () => void;
  export let onResetup: () => void = undefined;
</script>

<div class="mb-10 space-y-4" in:fly={{ y: -50 }}>
  <p class="text-4xl font-bold mt-2">{name} has won!</p>
  <div class="space-x-2">
    <Button on:click={onRestart}>Start again</Button>
    {#if onResetup}
      <Button on:click={onResetup} variant="outline">Change settings</Button>
    {/if}
    <ButtonLink href="/game" alt="Go back to all games" variant="outline">Back to games</ButtonLink>
  </div>
</div>
