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
  import TurfWarsGameSession from "$lib/game/sessions/TurfWarsGameSession.svelte";
</script>

<PageLayout>
  <TurfWarsGameSession />
</PageLayout>
