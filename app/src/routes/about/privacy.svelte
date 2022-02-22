<script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit";

  export const prerender = true;

  export const fetch: Load = async () => ({
    status: 200,
    maxage: 60 * 60 * 24
  });
</script>

<script lang="ts">
  import SectionLayout from "$lib/layout/views/SectionLayout.svelte";
  import PrimaryNavigationGridLayout from "$lib/layout/views/PrimaryNavigationGridLayout.svelte";
  import ButtonLink from "$lib/input/views/ButtonLink.svelte";
  import PageLayout from "$lib/layout/views/PageLayout.svelte";
  import DisplayGrid from "$lib/display/views/DisplayGrid.svelte";
  import DisplayGridItemCarousel from "$lib/display/views/DisplayGridItemCarousel.svelte";
  import { directions } from "$lib/display/models/space";
  import DisplaySingluarCarouselTitle from "$lib/display/views/DisplaySingluarCarouselTitle.svelte";
  import DisplayGridItem from "$lib/display/views/DisplayGridItem.svelte";
</script>

<PageLayout>
  <SectionLayout withContentTopSpacing sectionTitle="Privacy" sectionTitleSize="lg">
    <DisplayGrid slot="header" variant="2/1">
      <DisplayGridItem class="col-span-2">
        <DisplayGridItemCarousel {directions} countItems={2}>
          <img
            slot="0"
            src="/img/privacy/sepia-wave.webp"
            alt="Moody view on a balcon at night from a living room"
            class="object-cover w-full h-full"
          />
          <DisplaySingluarCarouselTitle
            slot="1"
            label="Privacy-first analytics"
            alignment="start"
          />
        </DisplayGridItemCarousel>
      </DisplayGridItem>
    </DisplayGrid>

    <PrimaryNavigationGridLayout slot="primaryNavigation">
      <ButtonLink
        href="https://www.cloudflare.com/en-gb/web-analytics/"
        alt="Link to Cloudflare Web Analytics"
        variant="bare"
        targetVariant="external">Cloudflare Web Analytics</ButtonLink
      >
    </PrimaryNavigationGridLayout>

    <div class="prose prose-lg">
      <p>
        spikze.club doesn't collect any personal identifiable data of you and your visits. A single
        telemetric data provider is implemented, which is Cloudflare Web Analytics.
      </p>
      <p>
        Because no data that can identify you, there is no requirement to show a conset view -
        simply because no relevant data is collected.
      </p>
      <p>What is collected is just a small collection of core metrics:</p>
      <ul>
        <li>Browser</li>
        <li>Country</li>
        <li>Time spent on site</li>
      </ul>
    </div>
  </SectionLayout>
</PageLayout>
