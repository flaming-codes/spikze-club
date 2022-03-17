<script>
  import DisplayProse from "$lib/display/views/DisplayProse.svelte";
  import ProminentDisplayTitle from "$lib/display/views/ProminentDisplayTitle.svelte";
  import PageLayout from "$lib/layout/views/PageLayout.svelte";
  import SectionLayout from "$lib/layout/views/SectionLayout.svelte";
</script>

<PageLayout>
  <SectionLayout withContentTopSpacing withHeaderSpacing>
    <ProminentDisplayTitle slot="header" color="primary">MSW Landing Page</ProminentDisplayTitle>
    <DisplayProse>
      <p>
        This compoonent has no purpose other than being part of an MSW demo implementation. See <a
          href="https://flaming.codes"
          alt="Link to flaming.codes with blog posts">flaming.codes</a
        > for more details.
      </p>
      <p>
        This page doesn't fetch any data for shows how client-side fetches are mocked with MSW in
        SvelteKit.
      </p>
      <p>Simply click the link below to access the page with data.</p>
      <p>
        <a href="/msw/demo" alt="Link to demo page with data">msw/demo</a>
      </p>
    </DisplayProse>
  </SectionLayout>
</PageLayout>
