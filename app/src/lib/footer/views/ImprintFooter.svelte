<script lang="ts">
  const links: { href: string; label: string }[] = [
    { href: "/", label: "Start" },
    { href: "/game", label: "Games" },
    { href: "/about", label: "About" },
    { href: "/about/privacy", label: "Privacy" }
  ];
</script>

<footer>
  <ul class="grid grid-rows-3 grid-flow-col md:grid-cols-4 max-w-xl gap-6">
    {#each links as { href, label }}
      <a {href} alt={label} class="text-xs text-slate-500">{label}</a>
    {/each}
  </ul>
</footer>
