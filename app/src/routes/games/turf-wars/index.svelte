<script lang="ts" context="module">
  export let prerender = true;
</script>

<script lang="ts">
  import ProminentDisplayTitle from "$lib/display/views/ProminentDisplayTitle.svelte";
  import PageLayout from "$lib/layout/views/PageLayout.svelte";
</script>

<PageLayout>
  <ProminentDisplayTitle color="primary">Turf war</ProminentDisplayTitle>
</PageLayout>
