<script lang="ts" context="module">
  export const prerender = false;
</script>

<script lang="ts">
  import DisplayColorItem from "$lib/display/views/DisplayColorItem.svelte";
  import DisplayGrid from "$lib/display/views/DisplayGrid.svelte";
  import DisplayGridItemCarousel from "$lib/display/views/DisplayGridItemCarousel.svelte";
</script>

<h1 class="text-xl font-bold">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<DisplayGrid variant="2/2">
  <DisplayColorItem color="dark">
    <DisplayGridItemCarousel countItems={3}>
      <img
        slot="0"
        class="h-full w-full object-cover"
        alt=""
        src="https://images.pexels.com/photos/6829559/pexels-photo-6829559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
      <img
        slot="1"
        class="h-full w-full object-cover"
        alt=""
        src="https://images.pexels.com/photos/163439/football-american-football-quarterback-runner-163439.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
      <img
        slot="2"
        class="h-full w-full object-cover"
        alt=""
        src="https://images.pexels.com/photos/1430931/pexels-photo-1430931.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
    </DisplayGridItemCarousel>
  </DisplayColorItem>
</DisplayGrid>
