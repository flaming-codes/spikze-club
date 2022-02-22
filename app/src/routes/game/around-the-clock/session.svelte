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
  import PageLayout from "$lib/layout/views/PageLayout.svelte";
  import SectionLayout from "$lib/layout/views/SectionLayout.svelte";
</script>

<PageLayout>
  <SectionLayout withHeaderSpacing sectionTitle="Around the clock">
    <ProminentDisplayTitle color="primary" slot="header">Available soon!</ProminentDisplayTitle>
  </SectionLayout>
</PageLayout>
