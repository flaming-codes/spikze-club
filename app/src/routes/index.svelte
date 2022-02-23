<script lang="ts" context="module">
  export const prerender = true;

  export const load: Load = () => ({
    status: 200,
    maxage: 60 * 60 * 24
  });
</script>

<script lang="ts">
  import ProminentDisplayTitle from "$lib/display/views/ProminentDisplayTitle.svelte";
  import ButtonLink from "$lib/input/views/ButtonLink.svelte";
  import PageLayout from "$lib/layout/views/PageLayout.svelte";
  import DisplayGrid from "$lib/display/views/DisplayGrid.svelte";
  import DisplayGridItem from "$lib/display/views/DisplayGridItem.svelte";
  import DisplayGridItemCarousel from "$lib/display/views/DisplayGridItemCarousel.svelte";
  import FeatureGridItemSimpleTupleDisplay from "$lib/display/views/FeatureGridItemSimpleTupleDisplay.svelte";
  import type { CarouselDirection } from "$lib/display/models/space";
  import DisplaySingularCarouselTitle from "$lib/display/views/DisplaySingularCarouselTitle.svelte";
  import SectionLayout from "$lib/layout/views/SectionLayout.svelte";
  import PrimaryNavigationGridLayout from "$lib/layout/views/PrimaryNavigationGridLayout.svelte";
  import DisplayGridItemLink from "$lib/display/views/DisplayGridItemLink.svelte";
  import type { Load } from "@sveltejs/kit";
  import Button from "$lib/input/views/Button.svelte";
  import { browser } from "$app/env";
  import { onDestroy } from "svelte";

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

  let defferedEvent: any = undefined;
  let isInstallPossible: boolean = false;

  const onBeforeInstallPrompt = (e: Event) => {
    defferedEvent = e;
    isInstallPossible = true;
  };

  const onInstall = () => {
    defferedEvent.prompt();
    isInstallPossible = false;
  };

  if (browser) {
    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
  }

  onDestroy(() => {
    if (browser) {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    }
  });
</script>

<PageLayout>
  <SectionLayout>
    <DisplayGrid slot="header" variant="4/3">
      <DisplayGridItem color="bright" class="col-span-2 row-span-2">
        <DisplayGridItemCarousel {directions} countItems={3}>
          <DisplaySingularCarouselTitle slot="0" label="spikze.club" widthVariant="double" />
          <DisplaySingularCarouselTitle slot="1" label="darts arcade" widthVariant="double" />
          <DisplaySingularCarouselTitle slot="2" label="scoreboard" widthVariant="double" />
        </DisplayGridItemCarousel>
      </DisplayGridItem>

      <DisplayGridItem color="muted" class="col-span-2 row-span-2">
        <DisplayGridItemCarousel {directions} countItems={3} withInitialDelay={150}>
          <DisplaySingularCarouselTitle
            slot="0"
            label="spikze.club"
            alignment="end"
            widthVariant="double"
          />
          <DisplaySingularCarouselTitle
            slot="1"
            label="darts arcade"
            alignment="end"
            widthVariant="double"
          />
          <DisplaySingularCarouselTitle
            slot="2"
            label="scoreboard"
            alignment="end"
            widthVariant="double"
          />
        </DisplayGridItemCarousel>
      </DisplayGridItem>

      <DisplayGridItem color="muted" class="col-span-2">
        <DisplayGridItemCarousel
          {directions}
          countItems={5}
          withInitialDelay={500}
          withRandomSeedInitialDelay={3000}
        >
          <FeatureGridItemSimpleTupleDisplay slot="0" value="Game On!" label="Hi & welcome!" />
          <FeatureGridItemSimpleTupleDisplay
            slot="1"
            value="Scoreboard for matches"
            label="Mission briefing"
          />
          <FeatureGridItemSimpleTupleDisplay
            slot="2"
            value="Offline available"
            label="Modern App"
          />
          <img
            slot="3"
            src="/img/about/scotts.webp"
            alt="Scottish shore landscape"
            class="object-cover w-full h-full"
          />
          <img
            slot="4"
            src="/img/about/savanna.webp"
            alt="Moody savanna landscape at dawn"
            class="object-cover w-full h-full"
          />
        </DisplayGridItemCarousel>
      </DisplayGridItem>

      <DisplayGridItem color="midnight">
        <DisplayGridItemLink
          isExternal
          class="transform duration-300 group-hover:rotate-[30deg] motion-reduce:transition-none"
          href="/game/around-the-clock"
          alt="Link to the game 'Around the clock'"
        >
          <FeatureGridItemSimpleTupleDisplay>
            <span slot="value">Around the clock</span>
            <span slot="label">Game</span>
          </FeatureGridItemSimpleTupleDisplay>
        </DisplayGridItemLink>
      </DisplayGridItem>

      <DisplayGridItem color="dark">
        <DisplayGridItemLink
          isExternal
          class="transform duration-700 group-hover:font-bold hover:uppercase motion-reduce:transition-none"
          href="/game/turf-wars"
          alt="Link to the game 'Turf Wars'"
        >
          <FeatureGridItemSimpleTupleDisplay>
            <span slot="value">Turf War</span>
            <span slot="label">Game</span>
          </FeatureGridItemSimpleTupleDisplay>
        </DisplayGridItemLink>
      </DisplayGridItem>
    </DisplayGrid>
  </SectionLayout>

  <SectionLayout withHeaderSpacing>
    <ProminentDisplayTitle slot="header" alignment="start" color="primary" size="lg">
      <h1>Hi there!</h1>
    </ProminentDisplayTitle>
    <PrimaryNavigationGridLayout slot="primaryNavigation">
      <ButtonLink href="/game" alt="All games">All games</ButtonLink>
      <ButtonLink href="/about" alt="About" variant="outline">About</ButtonLink>
    </PrimaryNavigationGridLayout>

    <div class="prose prose-lg">
      <p>
        Welcome to spikze.club, a small progressive web app (PWA) that provides a collection of
        mini-games for playing darts with your guys and gals.
      </p>
      <p>
        Please note that this is not a 3D darts game, it's really just a glorified scorebore. You
        can install this web app, as offline support is implemented.
      </p>

      <h3>Offline usage & installation</h3>
      <p>
        Because this is a PWA (Progressive Web App), you can actually completely use it offline.
        Don't believe it? Simply switch off your web connection and navigate to any page.
      </p>
      <p>
        Offline usage can be particular helpful if you want to use the scoreboards in an
        environement where a connection is not really possible, e.g. when playing darts in your
        cellar.
      </p>
      <p>
        On supported browsers, you can also install the PWA and run it like a native app. To do so,
        please check the right-hand icons in your browser's input bar.
      </p>
      {#if isInstallPossible}
        <Button on:click={onInstall}>Show install prompt</Button>
      {/if}
    </div>
  </SectionLayout>
</PageLayout>
