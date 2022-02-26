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
  import SectionLayout from "$lib/layout/views/SectionLayout.svelte";
  import DisplayGrid from "$lib/display/views/DisplayGrid.svelte";
  import DisplayGridItem from "$lib/display/views/DisplayGridItem.svelte";
  import DisplayGridItemCarousel from "$lib/display/views/DisplayGridItemCarousel.svelte";
  import DisplaySingularCarouselTitle from "$lib/display/views/DisplaySingularCarouselTitle.svelte";
  import DisplayProse from "$lib/display/views/DisplayProse.svelte";
  import { Route } from "$lib/nav/models/routes";
</script>

<PageLayout>
  <SectionLayout>
    <DisplayGrid slot="header" variant="2/1">
      <div class="col-span-2">
        <DisplayGridItem>
          <DisplayGridItemCarousel
            countItems={4}
            withInitialDelay={750}
            withRandomSeedInitialDelay={1500}
          >
            <DisplaySingularCarouselTitle slot="0" label="flaming.codes" />
            <DisplaySingularCarouselTitle slot="1" label="Tom Schönmann" />
            <DisplaySingularCarouselTitle slot="2" label="Design + Code" />
            <DisplaySingularCarouselTitle slot="3" label="🇪🇺 Made in Europe" />
          </DisplayGridItemCarousel>
        </DisplayGridItem>
      </div>
    </DisplayGrid>

    <DisplayProse>
      <h3>Imprint</h3>
      <p>
        This PWA (Progressive Web App) is a personal sideproject. No ads are shown and no money is
        made by using it. Furthermore, no personally identifiable data is collected.
      </p>
      <p>
        For more information about privacy, see the <a
          href={Route.Privacy}
          alt="Privacy documentation">Privacy Page</a
        >.
      </p>
      <p>
        For more information about the creator, see <a
          href="https://flaming.codes/about"
          alt="Personal site of Tom Schönmann"
          rel="external">flaming.codes</a
        >.
      </p>
      <p>🇪🇺 Made in Europe</p>
    </DisplayProse>
  </SectionLayout>
</PageLayout>
