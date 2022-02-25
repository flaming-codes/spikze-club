<script>
  import FooterSitemap from "$lib/footer/views/FooterSitemap.svelte";
  import PageLayout from "$lib/layout/views/PageLayout.svelte";
  import "../app.css";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link crossorigin rel="preconnect" href="https://fonts.gstatic.com" />
  <link crossorigin rel="preconnect" href="https://fonts.googleapis.com" />

  <link
    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<!-- icons: https://icon-sets.iconify.design/carbon/-->

<slot />

<PageLayout class="mt-36 mx-4">
  <FooterSitemap />
</PageLayout>
