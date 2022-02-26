<script lang="ts">
  import { Route } from "$lib/nav/models/routes";

  const links: { href: string; label: string }[] = [
    { href: Route.Start, label: "Start" },
    { href: Route.Game, label: "Games" },
    { href: Route.About, label: "About" },
    { href: Route.Privacy, label: "Privacy" },
    { href: Route.Imprint, label: "Imprint" },
    { href: Route.Licenses, label: "Licenses" }
  ];
</script>

<footer>
  <ul class="grid grid-rows-3 grid-flow-col md:grid-cols-4 max-w-xl gap-6">
    {#each links as { href, label }}
      <a {href} alt={label} class="text-xs text-slate-500">{label}</a>
    {/each}
  </ul>
</footer>
