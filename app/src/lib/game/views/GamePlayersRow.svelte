<script lang="ts">
  import clsx from "clsx";

  export let tuples: { name: string; colorClass: string }[];
</script>

<ul class="flex gap-6">
  {#each tuples as { name, colorClass }, i}
    <li>
      <div class="h-full inline-flex items-center space-x-2">
        <div class={clsx("h-3 w-3", colorClass)} />
        <span class="text-md">{name}</span>
      </div>
    </li>
  {/each}
</ul>
