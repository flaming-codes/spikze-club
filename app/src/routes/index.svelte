<script lang="ts" context="module">
  import ProminentDisplayTitle from "$lib/display/views/ProminentDisplayTitle.svelte";
  import Button from "$lib/input/views/Button.svelte";
  import ButtonLink from "$lib/input/views/ButtonLink.svelte";
  import PageLayout from "$lib/layout/views/PageLayout.svelte";
  import DisplayGrid from "$lib/display/views/DisplayGrid.svelte";
  import DisplayGridItem from "$lib/display/views/DisplayGridItem.svelte";
  import DisplayGridItemCarousel from "$lib/display/views/DisplayGridItemCarousel.svelte";
  import FeatureGridItemSimpleTupleDisplay from "$lib/display/views/FeatureGridItemSimpleTupleDisplay.svelte";
  import type { CarouselDirection } from "$lib/display/models/space";
  import DisplaySingluarCarouselTitle from "$lib/display/views/DisplaySingluarCarouselTitle.svelte";

  export const prerender = true;

  const directions: CarouselDirection[] = [
    {
      enterFrom: "translate-x-[200%]",
      enterTo: "translate-x-0",
      leaveFrom: "translate-x-0",
      leaveTo: "-translate-x-[200%]"
    },
    {
      enterFrom: "translate-y-full",
      enterTo: "translate-y-0",
      leaveFrom: "translate-y-0",
      leaveTo: "-translate-y-full"
    },
    {
      enterFrom: "-translate-x-[200%]",
      enterTo: "translate-x-0",
      leaveFrom: "translate-x-0",
      leaveTo: "translate-x-[200%]"
    },
    {
      enterFrom: "-translate-y-full",
      enterTo: "translate-y-0",
      leaveFrom: "translate-y-0",
      leaveTo: "translate-y-full"
    }
  ];
</script>

<PageLayout withTopPadding>
  <ProminentDisplayTitle alignment="start" color="primary">
    <h1>Game on!</h1>
  </ProminentDisplayTitle>
  <ButtonLink href="/" alt="About" isExternal isOutline>What?</ButtonLink>
</PageLayout>

<PageLayout withTopPadding>
  <DisplayGrid variant="2/1">
    <DisplayGridItem color="bright">
      <DisplayGridItemCarousel {directions} countItems={3}>
        <DisplaySingluarCarouselTitle slot="0" label="spikze.club" />
        <DisplaySingluarCarouselTitle slot="1" label="darts arcade" />
        <DisplaySingluarCarouselTitle slot="2" label="scoreboard" />
      </DisplayGridItemCarousel>
    </DisplayGridItem>

    <DisplayGridItem color="muted">
      <DisplayGridItemCarousel {directions} countItems={3} withInitialDelay={150}>
        <DisplaySingluarCarouselTitle slot="0" label="spikze.club" alignment="end" />
        <DisplaySingluarCarouselTitle slot="1" label="darts arcade" alignment="end" />
        <DisplaySingluarCarouselTitle slot="2" label="scoreboard" alignment="end" />
      </DisplayGridItemCarousel>
    </DisplayGridItem>
  </DisplayGrid>

  <DisplayGrid variant="2/1">
    <DisplayGridItem color="midnight">
      <div class="h-full w-full duration-200 hover:rotate-[35deg]">
        <a
          class="h-full w-full"
          href="/games/around-the-clock"
          alt="Link to the game 'Around the clock'"
        >
          <FeatureGridItemSimpleTupleDisplay>
            <span slot="value">Around the clock</span>
            <span slot="label">Game</span>
          </FeatureGridItemSimpleTupleDisplay>
        </a>
      </div>
    </DisplayGridItem>

    <DisplayGridItem color="dark">
      <div class="h-full w-full duration-700 hover:font-bold hover:uppercase">
        <a class="h-full w-full" href="/games/turf-wars" alt="Link to the game 'Turf war'">
          <FeatureGridItemSimpleTupleDisplay>
            <span slot="value">Turf War</span>
            <span slot="label">Game</span>
          </FeatureGridItemSimpleTupleDisplay>
        </a>
      </div>
    </DisplayGridItem>
  </DisplayGrid>
</PageLayout>

<!--
    <DisplayGridItemCarousel countItems={1}>
        <DisplayGridItem color="dark">
          <FeatureGridItemSimpleTupleDisplay>
            <span slot="value">Vienna</span>
            <span slot="label">Austria</span>
          </FeatureGridItemSimpleTupleDisplay>
        </DisplayGridItem>
      </DisplayGridItemCarousel>
-->
<!--


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
-->
