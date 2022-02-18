<script lang="ts">
  import SquareImageHeader from "$lib/header/views/SquareImageHeader.svelte";
  import ButtonLink from "$lib/input/views/ButtonLink.svelte";
  import PageLayout from "$lib/layout/views/PageLayout.svelte";
  import PrimaryNavigationGridLayout from "$lib/layout/views/PrimaryNavigationGridLayout.svelte";
  import SectionLayout from "$lib/layout/views/SectionLayout.svelte";
  import SectionAnchor from "$lib/section/views/SectionAnchor.svelte";
  import { getAnchorRef } from "$lib/nav/models/routes";
</script>

<PageLayout>
  <SectionLayout sectionTitle="Tom Schönmann" sectionTitleSize="xl">
    <SquareImageHeader
      slot="header"
      img={{
        src: "/img/about/surfer.webp",
        alt: "Black-and-white image, zoomed in from a distance, of a surfer turning on a wave"
      }}
    >
      <div class="p-4 sm:p-8 md:p-14 lg:p-20 space-y-8">
        <p class="text-md lg:text-lg xl:text-2xl">
          Hi, my name is Tom and I'm the developer as well as designer of this Progressive Web App
          which provides scorebords for a collection of dart mini games.
        </p>
        <p class="text-md lg:text-lg xl:text-2xl">
          I initally created this app so that my borther and I can track our scores when playing
          against each other. But if you like it, I'm even more happy that people enjoy the stuff I
          build.
        </p>
      </div>
    </SquareImageHeader>

    <PrimaryNavigationGridLayout slot="primaryNavigation">
      <ButtonLink href={getAnchorRef({ id: "section-a" })} alt="">Me, Myself & I</ButtonLink>
      <ButtonLink href={getAnchorRef({ id: "section-b" })} alt="">More</ButtonLink>
    </PrimaryNavigationGridLayout>
  </SectionLayout>

  <SectionAnchor id="section-a">
    <SectionLayout sectionTitle="Me, Myself & I">
      <p class="h-[800px]">Content!</p>
    </SectionLayout>
  </SectionAnchor>

  <SectionAnchor id="section-b">
    <SectionLayout sectionTitle="More">
      <p class="h-[800px]">Content!</p>
    </SectionLayout>
  </SectionAnchor>
</PageLayout>
