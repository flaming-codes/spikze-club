<script lang="ts">
  import DisplayGrid from "$lib/display/views/DisplayGrid.svelte";
  import DisplayGridItem from "$lib/display/views/DisplayGridItem.svelte";
  import DisplayGridItemCarousel from "$lib/display/views/DisplayGridItemCarousel.svelte";
  import DisplaySingularCarouselTitle from "$lib/display/views/DisplaySingularCarouselTitle.svelte";

  import clsx from "clsx";

  export let sectionTitle: string = undefined;
  export let sectionTitleSize: "lg" | "xl" = undefined;
  export let withHeaderSpacing: boolean = undefined;
  export let withSectionTitleSpacing: boolean = undefined;
  export let withContentTopSpacing: boolean = undefined;
  export let withCarouselTitleOnSmall: boolean = undefined;
</script>

<!-- slot 'header'-->
<!-- slot 'primaryNavigation'-->

<section
  class={clsx("flex flex-col-reverse sm:flex-row sm:space-x-20 mx-4 lg:mx-0", {
    ["mt-20"]: withHeaderSpacing
  })}
>
  <div class="flex-1 flex-col">
    <slot name="header" />
    {#if $$slots.primaryNavigation}
      <div class="my-16">
        <slot name="primaryNavigation" />
      </div>
    {/if}
    <div
      class={clsx({
        "mt-8": withContentTopSpacing
      })}
    >
      <slot />
    </div>
  </div>
  {#if sectionTitle}
    <div
      class={clsx("font-bold", {
        ["text-xl sm:text-2xl lg:text-3xl"]: !sectionTitleSize,
        ["text-3xl sm:text-4xl lg:text-5xl"]: sectionTitleSize === "lg",
        ["text-5xl md:text-6xl lg:text-7xl"]: sectionTitleSize === "xl"
      })}
    >
      {#if !withCarouselTitleOnSmall}
        <h2 class="sm:hidden my-12">{sectionTitle}</h2>
      {/if}
      {#if withCarouselTitleOnSmall}
        <DisplayGrid slot="header" variant="4/1" class="sm:hidden">
          <div class="col-span-4">
            <DisplayGridItem color="muted">
              <DisplayGridItemCarousel countItems={1}>
                <DisplaySingularCarouselTitle slot="0" label={sectionTitle} />
              </DisplayGridItemCarousel>
            </DisplayGridItem>
          </div>
        </DisplayGrid>
      {/if}
      <h2
        style="writing-mode: vertical-rl;"
        class={clsx("hidden sm:inline sticky top-20 mb-24", {
          // TODO: The layout here is shaky as margins the element out of its space. Check. -Tom
          ["pt-20"]: withSectionTitleSpacing
        })}
      >
        {sectionTitle}
      </h2>
    </div>
  {/if}
</section>
