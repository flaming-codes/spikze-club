<script lang="ts">
  import clsx from "clsx";

  export let title: string;
  export let size: "lg" = undefined;
</script>

<h1
  class={clsx("text-primary text-center", {
    ["text-2xl"]: !size,
    ["text-5xl"]: size === "lg"
  })}
>
  {title}
</h1>
