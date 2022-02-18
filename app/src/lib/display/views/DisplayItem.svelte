<script lang="ts">
  // child: 'visual'
  export let title: string;
  export let description: string;
</script>

<div class="inline-flex space-x-8">
  <slot name="visual" />
  <div class="flex flex-col space-y-4">
    <h3 class="text-2xl font-medium">{title}</h3>
    <p class="text-gray-600">{description}</p>
  </div>
</div>
