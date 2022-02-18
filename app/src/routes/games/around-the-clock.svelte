<script lang="ts" context="module">
  import DisplayGrid from "$lib/display/views/DisplayGrid.svelte";
  import DisplayGridItem from "$lib/display/views/DisplayGridItem.svelte";
  import DisplayGridItemBannerText from "$lib/display/views/DisplayGridItemBannerText.svelte";
  import DisplayGridItemCarousel from "$lib/display/views/DisplayGridItemCarousel.svelte";
  import FeatureGridItemSimpleTupleDisplay from "$lib/display/views/FeatureGridItemSimpleTupleDisplay.svelte";

  import ProminentDisplayTitle from "$lib/display/views/ProminentDisplayTitle.svelte";
  import PageLayout from "$lib/layout/views/PageLayout.svelte";
  import SectionLayout from "$lib/layout/views/SectionLayout.svelte";

  export let prerender = false;
</script>

<PageLayout>
  <SectionLayout sectionTitle="Around the clock" sectionTitleSize="xl">
    <DisplayGrid slot="header" variant="4/2">
      <div class="col-span-2 row-span-2">
        <DisplayGridItem color="midnight">
          <DisplayGridItemBannerText>
            <h2 slot="value">The classic</h2>
          </DisplayGridItemBannerText>
        </DisplayGridItem>
      </div>
      <DisplayGridItem>
        <DisplayGridItemCarousel countItems={2}>
          <img
            alt=""
            slot="0"
            class="h-full w-full object-cover"
            src="https://images.pexels.com/photos/11041568/pexels-photo-11041568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <img
            alt=""
            slot="1"
            class="h-full w-full object-cover"
            src="https://images.pexels.com/photos/4007310/pexels-photo-4007310.jpeg?cs=srgb&dl=pexels-alex-azabache-4007310.jpg&fm=jpg"
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
