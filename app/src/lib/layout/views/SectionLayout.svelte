<script lang="ts">
  import clsx from "clsx";

  export let sectionTitle: string = undefined;
  export let sectionTitleSize: "lg" | "xl" = undefined;
  export let withHeaderSpacing: boolean = undefined;
  export let withSectionTitleSpacing: boolean = undefined;
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
    <slot />
  </div>
  {#if sectionTitle}
    <div
      class={clsx("font-bold", {
        ["text-xl sm:text-2xl lg:text-3xl"]: !sectionTitleSize,
        ["text-3xl sm:text-4xl lg:text-5xl"]: sectionTitleSize === "lg",
        ["text-5xl md:text-6xl lg:text-7xl"]: sectionTitleSize === "xl"
      })}
    >
      <h3 class="sm:hidden">{sectionTitle}</h3>
      <h3
        style="writing-mode: vertical-lr;"
        class={clsx("hidden sm:inline sticky top-20 mb-24", {
          // TODO: The layout here is shaky as margins the element out of its space. Check. -Tom
          ["pt-20"]: withSectionTitleSpacing
        })}
      >
        {sectionTitle}
      </h3>
    </div>
  {/if}
</section>
