<script lang="ts">
  export let id: string;
</script>

<a {id} class="block relative -top-14 invisible" aria-hidden={true}>
  <span />
</a>
<slot />
