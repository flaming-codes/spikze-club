<script>
  import "../app.css";

  import FooterSitemap from "$lib/footer/views/FooterSitemap.svelte";
  import PageLayout from "$lib/layout/views/PageLayout.svelte";
  import { dev } from "$app/env";

  const isMswEnabled = dev && import.meta.env.VITE_MSW_ENABLED === "true";
  // Flag to defer rendering of components
  // until certain criteria are met on dev,
  // e.g. MSW init.
  let isReady = !isMswEnabled;

  if (isMswEnabled) {
    import("$msw")
      .then((res) => res.inject())
      .then(() => (isReady = true));
  }
</script>

<svelte:head>
  <link crossorigin rel="preconnect" href="https://fonts.gstatic.com" />
  <link crossorigin rel="preconnect" href="https://fonts.googleapis.com" />

  <link
    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<!-- icons: https://icon-sets.iconify.design/carbon/-->

{#if isReady}
  <slot />

  <PageLayout class="mt-36 px-4">
    <FooterSitemap />
  </PageLayout>
{/if}
