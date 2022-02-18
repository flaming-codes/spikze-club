<script lang="ts" context="module">
  import ProminentDisplayTitle from "$lib/display/views/ProminentDisplayTitle.svelte";
  import PageLayout from "$lib/layout/views/PageLayout.svelte";

  export let prerender = false;
</script>

<PageLayout>
  <ProminentDisplayTitle color="primary">Turf war</ProminentDisplayTitle>
</PageLayout>
