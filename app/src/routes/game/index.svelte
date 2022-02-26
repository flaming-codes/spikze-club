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
  import PrimaryNavigationGridLayout from "$lib/layout/views/PrimaryNavigationGridLayout.svelte";
  import ButtonLink from "$lib/input/views/ButtonLink.svelte";
  import SectionAnchor from "$lib/section/views/SectionAnchor.svelte";
  import { getAnchorRef, Route } from "$lib/nav/models/routes";
  import DisplayGrid from "$lib/display/views/DisplayGrid.svelte";
  import DisplayGridItem from "$lib/display/views/DisplayGridItem.svelte";
  import FeatureGridItemSimpleTupleDisplay from "$lib/display/views/FeatureGridItemSimpleTupleDisplay.svelte";
  import DisplayGridItemCarousel from "$lib/display/views/DisplayGridItemCarousel.svelte";

  const demoUrls = [
    "/img/game/game-0.webp",
    "/img/game/game-1.webp",
    "/img/game/game-2.webp",
    "/img/game/game-3.webp",
    "/img/game/game-4.webp",
    "/img/game/game-5.webp",
    "/img/game/game-6.webp",
    "/img/game/game-7.webp",
    "/img/game/game-8.webp",
    "/img/game/game-9.webp",
    "/img/game/game-10.webp"
  ];
</script>

<PageLayout>
  <SectionLayout withSectionTitleSpacing sectionTitle="All Games" sectionTitleSize="xl">
    <svelte:fragment slot="header">
      <DisplayGrid variant="4/2">
        <DisplayGridItem color="muted">
          <FeatureGridItemSimpleTupleDisplay value="2" label="Total games" />
        </DisplayGridItem>

        <DisplayGridItem>
          <DisplayGridItemCarousel countItems={3} withRandomSeedInitialDelay={-3000}>
            <img slot="0" alt="" class="h-full w-full object-cover" src={demoUrls[0]} />
            <img slot="1" alt="" class="h-full w-full object-cover" src={demoUrls[1]} />
            <img slot="2" alt="" class="h-full w-full object-cover" src={demoUrls[2]} />
          </DisplayGridItemCarousel>
        </DisplayGridItem>

        <DisplayGridItem>
          <FeatureGridItemSimpleTupleDisplay value="Overview" />
        </DisplayGridItem>

        <DisplayGridItem color="bright">
          <FeatureGridItemSimpleTupleDisplay value="Enjoy!" />
        </DisplayGridItem>

        <div class="col-span-2">
          <DisplayGridItem color="tinted">
            <DisplayGridItemCarousel
              withRandomInitialDirection
              countItems={2}
              withRandomSeedInitialDelay={700}
            >
              <FeatureGridItemSimpleTupleDisplay slot="0" value="Around-the-clock" label="Game" />
              <FeatureGridItemSimpleTupleDisplay slot="1" value="Turf Wars" label="Game" />
            </DisplayGridItemCarousel>
          </DisplayGridItem>
        </div>

        <div class="grid grid-cols-2 grid-rows-2">
          <DisplayGridItem color="bright">
            <DisplayGridItemCarousel
              withRandomInitialDirection
              countItems={2}
              withRandomSeedInitialDelay={-1200}
            >
              <img slot="0" alt="" class="h-full w-full object-cover" src={demoUrls[3]} />
              <FeatureGridItemSimpleTupleDisplay slot="1" size="md" value="Offline" />
              <img slot="2" alt="" class="h-full w-full object-cover" src={demoUrls[4]} />
              <FeatureGridItemSimpleTupleDisplay slot="3" size="md" value="Multiplayer" />
            </DisplayGridItemCarousel>
          </DisplayGridItem>

          <DisplayGridItem color="muted">
            <DisplayGridItemCarousel
              withRandomInitialDirection
              countItems={4}
              withRandomSeedInitialDelay={698}
            >
              <FeatureGridItemSimpleTupleDisplay slot="0" value="1-4" label="Players" />
              <img slot="1" alt="" class="h-full w-full object-cover" src={demoUrls[5]} />
              <img slot="2" alt="" class="h-full w-full object-cover" src={demoUrls[6]} />
              <FeatureGridItemSimpleTupleDisplay slot="3" value="30 min" label="Avg. time" />
            </DisplayGridItemCarousel>
          </DisplayGridItem>

          <DisplayGridItem>
            <DisplayGridItemCarousel
              withRandomInitialDirection
              countItems={3}
              withRandomSeedInitialDelay={-1800}
            >
              <img slot="0" alt="" class="h-full w-full object-cover" src={demoUrls[7]} />
              <img slot="1" alt="" class="h-full w-full object-cover" src={demoUrls[8]} />
              <img slot="2" alt="" class="h-full w-full object-cover" src={demoUrls[9]} />
            </DisplayGridItemCarousel>
          </DisplayGridItem>

          <DisplayGridItem color="dark">
            <DisplayGridItemCarousel
              withRandomInitialDirection
              countItems={2}
              withRandomSeedInitialDelay={-200}
            >
              <FeatureGridItemSimpleTupleDisplay slot="0" size="md" value="Install locally" />
              <FeatureGridItemSimpleTupleDisplay slot="1" size="md" value="Enjoy Darts" />
            </DisplayGridItemCarousel>
          </DisplayGridItem>
        </div>

        <DisplayGridItem color="midnight">
          <DisplayGridItemCarousel
            withRandomInitialDirection
            countItems={2}
            withRandomSeedInitialDelay={3000}
          >
            <FeatureGridItemSimpleTupleDisplay slot="0" value="March 2022" label="Next update" />
            <FeatureGridItemSimpleTupleDisplay slot="1" value="42" label="Total plays" />
          </DisplayGridItemCarousel>
        </DisplayGridItem>
      </DisplayGrid>

      <p class="py-4 md:py-8 xl:py-12 text-lg xl:text-2xl max-w-4xl">
        Welcome to the dart arcade! Get to know all games available on spikze.club! The collection
        is ever growing, and if you feel your game idea should be implemented as well, just reach
        out to me <a href="mailto:tom@flmaing.codes" class="opacity-70">by mail</a>.
      </p>
    </svelte:fragment>
    <PrimaryNavigationGridLayout slot="primaryNavigation">
      <ButtonLink
        href={getAnchorRef({ id: "around-the-clock" })}
        alt=""
        variant="outline"
        targetVariant="section">Around the clock</ButtonLink
      >
      <ButtonLink
        href={getAnchorRef({ id: "turf-wars" })}
        alt=""
        variant="outline"
        targetVariant="section">Turf Wars</ButtonLink
      >
    </PrimaryNavigationGridLayout>
  </SectionLayout>

  <SectionAnchor id="turf-wars">
    <SectionLayout sectionTitle="Turf Wars">
      <div slot="header" class="prose prose-lg">
        <p>
          'Turf Wars' is a fast-paced capture-the-flag game, that can be won in a matter of minutes
          - or hours.
        </p>
      </div>
      <PrimaryNavigationGridLayout slot="primaryNavigation">
        <ButtonLink href={Route.TurfWarsSession} alt="Start a session of good 'ol Turf Wars">
          Start session
        </ButtonLink>
        <ButtonLink variant="outline" href={Route.TurfWars} alt="Link to Turf Wars game">
          Show details
        </ButtonLink>
      </PrimaryNavigationGridLayout>
    </SectionLayout>
  </SectionAnchor>

  <SectionAnchor id="around-the-clock">
    <SectionLayout sectionTitle="Around the clock">
      <div slot="header" class="prose prose-lg">
        <p>
          'Around the clock' is a game for 2 players that rewards endurance and can take langer than
          other games. Every player tries to catch the other one, starting from opposing numbers.
        </p>
      </div>
      <PrimaryNavigationGridLayout slot="primaryNavigation">
        <ButtonLink href={Route.AtcSession} alt="Start a session of 'Around the clock'">
          Start session
        </ButtonLink>
        <ButtonLink variant="outline" href={Route.Atc} alt="Link to around the clock game">
          Learn more
        </ButtonLink>
      </PrimaryNavigationGridLayout>
    </SectionLayout>
  </SectionAnchor>
</PageLayout>
