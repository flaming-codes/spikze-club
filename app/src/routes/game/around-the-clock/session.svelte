<script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit";

  export const prerender = true;

  export const fetch: Load = async () => ({
    status: 200,
    maxage: 60 * 60 * 24
  });
</script>

<script lang="ts">
  import ProminentDisplayTitle from "$lib/display/views/ProminentDisplayTitle.svelte";
  import SectionLayout from "$lib/layout/views/SectionLayout.svelte";
</script>

<SectionLayout withHeaderSpacing sectionTitle="Around the clock">
  <ProminentDisplayTitle slot="header">Available soon!</ProminentDisplayTitle>
</SectionLayout>
