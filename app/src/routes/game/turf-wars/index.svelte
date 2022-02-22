<script lang="ts" context="module">
  export const prerender = true;

  export const load: Load = async () => ({
    status: 200,
    maxage: 60 * 60 * 24
  });
</script>

<script lang="ts">
  import DisplayGrid from "$lib/display/views/DisplayGrid.svelte";
  import DisplayGridItem from "$lib/display/views/DisplayGridItem.svelte";
  import DisplayGridItemBannerText from "$lib/display/views/DisplayGridItemBannerText.svelte";
  import DisplayGridItemCarousel from "$lib/display/views/DisplayGridItemCarousel.svelte";
  import DisplayProse from "$lib/display/views/DisplayProse.svelte";
  import FeatureGridItemSimpleTupleDisplay from "$lib/display/views/FeatureGridItemSimpleTupleDisplay.svelte";
  import ButtonLink from "$lib/input/views/ButtonLink.svelte";
  import PageLayout from "$lib/layout/views/PageLayout.svelte";
  import PrimaryNavigationGridLayout from "$lib/layout/views/PrimaryNavigationGridLayout.svelte";
  import SectionLayout from "$lib/layout/views/SectionLayout.svelte";
  import type { Load } from "@sveltejs/kit";
</script>

<PageLayout>
  <SectionLayout withSectionTitleSpacing sectionTitle="Turf Wars" sectionTitleSize="xl">
    <DisplayGrid slot="header" variant="4/2">
      <DisplayGridItem color="midnight" class="col-span-4 row-span-1">
        <DisplayGridItemCarousel
          countItems={3}
          withInitialDelay={750}
          withRandomSeedInitialDelay={1500}
        >
          <DisplayGridItemBannerText slot="0">
            <h2 slot="value">Capture the flags</h2>
          </DisplayGridItemBannerText>
          <DisplayGridItemBannerText slot="1">
            <h2 slot="value">Watch your back</h2>
          </DisplayGridItemBannerText>
          <DisplayGridItemBannerText slot="2">
            <h2 slot="value">Win fast or die fast</h2>
          </DisplayGridItemBannerText>
        </DisplayGridItemCarousel>
      </DisplayGridItem>

      <DisplayGridItem class="col-span-2">
        <DisplayGridItemCarousel countItems={2}>
          <img
            alt=""
            slot="0"
            class="h-full w-full object-cover"
            src="/img/game/mountain-w-trees.webp"
          />
          <img alt="" slot="1" class="h-full w-full object-cover" src="/img/game/mountains.webp" />
        </DisplayGridItemCarousel>
      </DisplayGridItem>

      <DisplayGridItem color="dark">
        <DisplayGridItemCarousel
          countItems={2}
          withInitialDelay={400}
          withRandomSeedInitialDelay={-2000}
        >
          <FeatureGridItemSimpleTupleDisplay slot="0">
            <span slot="value">2</span>
            <span slot="label">Players</span>
          </FeatureGridItemSimpleTupleDisplay>
          <FeatureGridItemSimpleTupleDisplay slot="1">
            <span slot="value">15 min</span>
            <span slot="label">Avg time</span>
          </FeatureGridItemSimpleTupleDisplay>
        </DisplayGridItemCarousel>
      </DisplayGridItem>

      <DisplayGridItem color="bright">
        <FeatureGridItemSimpleTupleDisplay>
          <span slot="value">Beginner</span>
          <span slot="label">Level</span>
        </FeatureGridItemSimpleTupleDisplay>
      </DisplayGridItem>
    </DisplayGrid>

    <PrimaryNavigationGridLayout slot="primaryNavigation">
      <ButtonLink href="/game/turf-wars/session" alt="Start a new game instance"
        >Start game</ButtonLink
      >
      <ButtonLink href="/game" alt="Show all games" variant="outline">All games</ButtonLink>
    </PrimaryNavigationGridLayout>

    <DisplayProse>
      <h3>Mission Briefing</h3>
      <p>
        'Turf Wars' is a variant of CPF (Capture the flag), where each player tries to win a certain
        amount of numbers first. The catch is that every captured number can be stolen by the other
        player.
      </p>

      <h3>Playing</h3>
      <p>
        First determine the starting numbers. For most fun, best use three numbers not too close to
        each other.
      </p>
      <blockquote>
        Example: Starting with <strong>20</strong>, <strong>16</strong> and <strong>15</strong> is
        most challenging. Using <strong>3</strong>, <strong>7</strong> and <strong>2</strong> will result
        in a very fast paced-game.
      </blockquote>
      <p>
        Each player then alternately has 3 throws. The goal is to capture all numbers. A number is
        captured when threshold of hits is reached, which is most commonly three. The threshold
        doesn't have to be reached exactly, every hit above the threshold is simply voided.
      </p>
      <p>
        Whenever a number is captured, all currenlty counted hits for all other players are set to
        zero. A number stays captured until another player reaches the threshold and steals it. Then
        the process repeats.
      </p>

      <h3>Bull's</h3>
      <p>The bull's eye doesn't count in this game and is treated as a void.</p>

      <h3>Winning</h3>
      <p>The player who first captures all defined numbers wins.</p>
    </DisplayProse>
  </SectionLayout>
</PageLayout>
