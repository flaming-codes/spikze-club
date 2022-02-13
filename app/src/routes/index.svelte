<script lang="ts" context="module">
  export const prerender = false;
</script>

<script lang="ts">
  import DisplayGrid from "$lib/display/views/DisplayGrid.svelte";
  import DisplayGridItem from "$lib/display/views/DisplayGridItem.svelte";
  import DisplayGridItemBannerText from "$lib/display/views/DisplayGridItemBannerText.svelte";
  import DisplayGridItemCarousel from "$lib/display/views/DisplayGridItemCarousel.svelte";
  import FeatureGridItemSimpleTupleDisplay from "$lib/display/views/FeatureGridItemSimpleTupleDisplay.svelte";
</script>

<DisplayGrid variant="4/2">
  <div class="col-span-2 row-span-2">
    <DisplayGridItem color="midnight">
      <DisplayGridItemBannerText>
        <h2 slot="value">Title</h2>
      </DisplayGridItemBannerText>
    </DisplayGridItem>
  </div>
  <DisplayGridItem>
    <DisplayGridItemCarousel countItems={3}>
      <img
        alt=""
        slot="0"
        class="h-full w-full object-cover"
        src="https://images.pexels.com/photos/6829559/pexels-photo-6829559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
      <img
        alt=""
        slot="1"
        class="h-full w-full object-cover"
        src="https://images.pexels.com/photos/163439/football-american-football-quarterback-runner-163439.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
      <img
        alt=""
        slot="2"
        class="h-full w-full object-cover"
        src="https://images.pexels.com/photos/1430931/pexels-photo-1430931.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
    </DisplayGridItemCarousel>
  </DisplayGridItem>

  <DisplayGridItem color="dark">
    <FeatureGridItemSimpleTupleDisplay>
      <span slot="value">Vienna</span>
      <span slot="label">Austria</span>
    </FeatureGridItemSimpleTupleDisplay>
  </DisplayGridItem>

  <DisplayGridItem color="bright">
    <FeatureGridItemSimpleTupleDisplay>
      <span slot="value">09:40</span>
      <span slot="label">Start</span>
    </FeatureGridItemSimpleTupleDisplay>
  </DisplayGridItem>

  <DisplayGridItem color="bright">
    <FeatureGridItemSimpleTupleDisplay>
      <span slot="value">11:45</span>
      <span slot="label">End</span>
    </FeatureGridItemSimpleTupleDisplay>
  </DisplayGridItem>
</DisplayGrid>
