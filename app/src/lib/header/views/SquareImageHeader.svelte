<script lang="ts">
  import type { ImageProp } from "$lib/media/types";
  import clsx from "clsx";

  export let img: ImageProp;
  export let withMaxWidth: boolean = undefined;
</script>

<div class="flex flex-col lg:flex-row">
  <div
    class={clsx("flex-1 max-w-full", {
      ["sm:max-w-xs md:max-w-sm lg:max-w-lg xl:max-w-xl"]: !withMaxWidth
    })}
  >
    <div class="aspect-w-1 aspect-h-1">
      <img src={img.src} alt={img.alt} class="object-cover" />
    </div>
  </div>
  <div class="flex-1">
    <slot />
  </div>
</div>
