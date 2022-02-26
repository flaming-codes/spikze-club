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
  import { Route } from "$lib/nav/models/routes";
  import type { Load } from "@sveltejs/kit";
</script>

<PageLayout>
  <SectionLayout
    withSectionTitleSpacing
    withCarouselTitleOnSmall
    sectionTitle="Around the clock"
    sectionTitleSize="xl"
  >
    <DisplayGrid slot="header" variant="4/2">
      <div class="col-span-2 row-span-2">
        <DisplayGridItem color="midnight">
          <DisplayGridItemCarousel
            countItems={3}
            withInitialDelay={750}
            withRandomSeedInitialDelay={1500}
          >
            <DisplayGridItemBannerText slot="0">
              <h2 slot="value">The classic</h2>
            </DisplayGridItemBannerText>
            <DisplayGridItemBannerText slot="1">
              <h2 slot="value">Destroyer of friendships</h2>
            </DisplayGridItemBannerText>
            <DisplayGridItemBannerText slot="2">
              <h2 slot="value">Only for the brave</h2>
            </DisplayGridItemBannerText>
          </DisplayGridItemCarousel>
        </DisplayGridItem>
      </div>
      <DisplayGridItem color="black">
        <DisplayGridItemCarousel countItems={2}>
          <img alt="" slot="0" class="h-full w-full object-cover" src="/img/game/moon.webp" />
          <img
            alt=""
            slot="1"
            class="h-full w-full object-cover"
            src="/img/game/tree-night-lake.webp"
          />
        </DisplayGridItemCarousel>
      </DisplayGridItem>

      <DisplayGridItem color="dark">
        <FeatureGridItemSimpleTupleDisplay>
          <span slot="value">2</span>
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

    <PrimaryNavigationGridLayout slot="primaryNavigation">
      <ButtonLink href={Route.AtcSession} alt="Start a new game instance">Start game</ButtonLink>
      <ButtonLink href={Route.Game} alt="Show all games" variant="outline">All games</ButtonLink>
    </PrimaryNavigationGridLayout>

    <DisplayProse>
      <h3>Mission Briefing</h3>
      <p>
        'Around the clock' is a race between the players, where each tries to catch the other one
        first.
      </p>

      <h3>Playing</h3>
      <p>
        First determine the starting number of the first player. The second player starts at the
        opposing number.
      </p>
      <blockquote>
        Example: P1 starts at <strong>20</strong>, therefore P2 starts at <strong>3</strong>.
      </blockquote>
      <p>
        Each player then alternately has 3 throws. Counting is done retroactively. The sum of all
        three throws determines the number of fields the player can move. Subsequently, a player can
        move at max 9 fields (3 triples).
      </p>

      <h3>Bull's</h3>
      <p>Hitting the outter bull's eye adds -1 to the player's movement.</p>
      <p>Hitting the inner bull's eye switches the players locations.</p>

      <h3>Winning</h3>
      <p>
        The player who first lands <strong>exactly</strong> on the other's current number wins. This
        is true for any direction, i.e. moving forwards or backwards.
      </p>
      <p>
        If a player doesn't land exactly, the player has overthrown. The game still contiues, but
        the one who overthrow is now most likely very close in front of the other player, becoming
        an easy target.
      </p>
    </DisplayProse>
  </SectionLayout>
</PageLayout>
