<script lang="ts">
  import type { ExportedLicense } from "../types";

  export let licenses: ExportedLicense[];
</script>

<ul>
  {#each licenses as l}
    <li>
      <a
        href={l.link.replace("git+", "").replace(".git", "")}
        alt={`License for ${l.name}`}
        rel="external"
        target="_blank"
      >
        <div class="hover:text-slate-400 duration-200 ease-in-out py-3">
          <strong>
            {l.name}
          </strong>
          by
          <strong>{l.author}</strong>
        </div>
      </a>
    </li>
  {/each}
</ul>
