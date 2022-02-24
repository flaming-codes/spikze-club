<script lang="ts">
  import { browser } from "$app/env";
  import { onDestroy } from "svelte";
  import Button from "./Button.svelte";

  let defferedEvent: any = undefined;
  let isInstallPossible: boolean = false;

  const onBeforeInstallPrompt = (e: Event) => {
    defferedEvent = e;
    isInstallPossible = true;
  };

  const onInstall = () => {
    defferedEvent.prompt();
    isInstallPossible = false;
  };

  if (browser) {
    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
  }

  onDestroy(() => {
    if (browser) {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    }
  });
</script>

{#if isInstallPossible}
  <Button on:click={onInstall}>Show install prompt</Button>
{/if}
