<script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit";

  export const prerender = true;

  export const fetch: Load = async () => ({
    status: 200,
    maxage: 60 * 60 * 24
  });
</script>

<script lang="ts">
  import PageLayout from "$lib/layout/views/PageLayout.svelte";
  import TurfWarsGameSetup from "$lib/game/setups/TurfWarsGameSetup.svelte";
</script>

<PageLayout>
  <TurfWarsGameSetup />
</PageLayout>
