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
  import LicenseList from "$lib/license/views/LicenseList.svelte";
  import type { ExportedLicense } from "$lib/license/types";
  import DisplayGrid from "$lib/display/views/DisplayGrid.svelte";
  import DisplayGridItem from "$lib/display/views/DisplayGridItem.svelte";
  import DisplaySingularCarouselTitle from "$lib/display/views/DisplaySingularCarouselTitle.svelte";
  import DisplayGridItemCarousel from "$lib/display/views/DisplayGridItemCarousel.svelte";

  export let licenses: ExportedLicense[];
</script>

<PageLayout>
  <SectionLayout>
    <DisplayGrid slot="header" variant="2/1">
      <div class="col-span-2">
        <DisplayGridItem>
          <DisplayGridItemCarousel
            withRandomInitialDirection
            countItems={3}
            withInitialDelay={750}
            withRandomSeedInitialDelay={1500}
          >
            <DisplaySingularCarouselTitle slot="0" label="Licenses" />
            <DisplaySingularCarouselTitle slot="1" label={`${licenses.length} in total`} />
            <DisplaySingularCarouselTitle slot="2" label="spikze.club" />
          </DisplayGridItemCarousel>
        </DisplayGridItem>
      </div>
    </DisplayGrid>
  </SectionLayout>

  <SectionLayout>
    <LicenseList {licenses} />
  </SectionLayout>
</PageLayout>
