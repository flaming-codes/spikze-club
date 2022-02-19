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
          I initally created this app so that my brother and I can track our scores when playing
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
      <div class="prose">
        <p>
          I'm a My name is Tom Schönmann and I'm a cloud native full stack web developer with years
          of hands-on experience in various international teams distributed around the globe, facing
          many challenges with often tight deadlines.
        </p>
        <p>
          I've been developing services and platforms with a user base of 90k+ and growing. My areas
          of responsibility span planning, writing, testing and maintaining Node.js backends, React
          frontends as well React Native apps for iOS and Android, preferably in Typescript.
        </p>
        <p>
          I've been implementing products with real time synchronization, warehouse management
          software to handle thousands of items and interfaces to hardware devices, just to name a
          few.
        </p>
      </div>
    </SectionLayout>
  </SectionAnchor>

  <SectionAnchor id="section-b">
    <SectionLayout withHeaderSpacing sectionTitle="More">
      <div class="prose">
        <h4>flaming.codes</h4>
        <p>
          To see other projects I'm working on or was part of, just visit <a
            href="https://flaming.codes/work#projects">projects on flaming.codes</a
          >.
        </p>
        <p>
          As being developer means trying to hit an ever moving target due to quickly evolving
          technologies and a constant stream of changes and improvements, it's important to stay
          ahead of the curve.
        </p>
        <p>
          To stay up-to-date on what's going on around the planet and to learn about emerging tools
          or trends, I'm using <a href="https://flaming.codes">flaming.codes</a> as a medium to challenge
          myself for exactly this task.
        </p>
        <p>
          flaming.codes gives me an opportunity to write about those changes on a regular basis.
          Furthermore, I use the PWA to learn about self-hosting a large static site (as of writing,
          flaming.codes is around 1k+ pages big) as well as having fun using Next.js and GCP as well
          as Azure for ML-based augmentations, such as the text-to-speech service or translation.
        </p>
      </div>
    </SectionLayout>
  </SectionAnchor>
</PageLayout>
