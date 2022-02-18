<script lang="ts">
  import type { ImageProp } from "$lib/media/types";

  export let img: ImageProp;
</script>

<div>
  <div class="aspect-h-1 aspect-w-3">
    <img src={img.src} alt={img.alt} class="object-cover" />
  </div>
  <slot />
</div>
