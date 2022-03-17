<script lang="ts">
  import ProminentDisplayTitle from "$lib/display/views/ProminentDisplayTitle.svelte";
  import PageLayout from "$lib/layout/views/PageLayout.svelte";
  import SectionLayout from "$lib/layout/views/SectionLayout.svelte";

  export let values: string[];
</script>

<PageLayout>
  <SectionLayout withHeaderSpacing withContentTopSpacing>
    <ProminentDisplayTitle slot="header" color="primary">MSW Demo</ProminentDisplayTitle>
    <p>
      This compoonent has no purpose other than being part of an MSW demo implementation. See <a
        href="https://flaming.codes"
        alt="Link to flaming.codes with blog posts">flaming.codes</a
      > for more details.
    </p>
    <p>
      Values: {values}
    </p>
  </SectionLayout>
</PageLayout>
