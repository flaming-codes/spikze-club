<script lang="ts" context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import DisplayGrid from "$lib/display/views/DisplayGrid.svelte";
  import DisplayGridItem from "$lib/display/views/DisplayGridItem.svelte";
  import DisplayGridItemBannerText from "$lib/display/views/DisplayGridItemBannerText.svelte";
  import DisplayGridItemCarousel from "$lib/display/views/DisplayGridItemCarousel.svelte";
  import FeatureGridItemSimpleTupleDisplay from "$lib/display/views/FeatureGridItemSimpleTupleDisplay.svelte";
  import PageLayout from "$lib/layout/views/PageLayout.svelte";
  import SectionLayout from "$lib/layout/views/SectionLayout.svelte";
</script>

<PageLayout>
  <SectionLayout withSectionTitleSpacing sectionTitle="Around the clock" sectionTitleSize="xl">
    <DisplayGrid slot="header" variant="4/2">
      <div class="col-span-2 row-span-2">
        <DisplayGridItem color="midnight">
          <DisplayGridItemBannerText>
            <h2 slot="value">The classic</h2>
          </DisplayGridItemBannerText>
        </DisplayGridItem>
      </div>
      <DisplayGridItem color="black">
        <DisplayGridItemCarousel countItems={2}>
          <img alt="" slot="0" class="h-full w-full object-cover" src="/img/games/moon.webp" />
          <img
            alt=""
            slot="1"
            class="h-full w-full object-cover"
            src="/img/games/tree-night-lake.webp"
          />
        </DisplayGridItemCarousel>
      </DisplayGridItem>

      <DisplayGridItem color="dark">
        <FeatureGridItemSimpleTupleDisplay>
          <span slot="value">2-4</span>
          <span slot="label">Players</span>
        </FeatureGridItemSimpleTupleDisplay>
      </DisplayGridItem>

      <DisplayGridItem color="bright">
        <FeatureGridItemSimpleTupleDisplay>
          <span slot="value">30 min</span>
          <span slot="label">Avg time</span>
        </FeatureGridItemSimpleTupleDisplay>
      </DisplayGridItem>

      <DisplayGridItem color="bright">
        <FeatureGridItemSimpleTupleDisplay>
          <span slot="value">Casual</span>
          <span slot="label">Level</span>
        </FeatureGridItemSimpleTupleDisplay>
      </DisplayGridItem>
    </DisplayGrid>
  </SectionLayout>
</PageLayout>
