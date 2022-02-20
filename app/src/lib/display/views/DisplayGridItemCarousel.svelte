<script lang="ts">
  import { Transition } from "@rgossiaux/svelte-headlessui";
  import { directions as _directions, type CarouselDirection } from "../models/space";

  export let withInitialDelay: number = undefined;
  export let withRandomSeedInitialDelay: number = undefined;
  export let countItems: number;
  export let directions: CarouselDirection[] = _directions;

  let index = 0;
  let isVisible = true;
  let direction = directions[0];
  let timer: NodeJS.Timeout;

  $: if (isVisible) {
    const getDelay = () => {
      const ms = 4_000;

      if (index === 0) {
        if (withRandomSeedInitialDelay) {
          return ms + Math.floor(Math.random() * withRandomSeedInitialDelay);
        }
        if (withInitialDelay) {
          return ms + withInitialDelay;
        }
      }
      return ms;
    };

    timer = setTimeout(() => {
      isVisible = false;
    }, getDelay());
  }

  $: if (!isVisible) {
    clearTimeout(timer);
  }

  const afterLeave = () => {
    setTimeout(() => {
      const maxIndex = countItems;

      direction = directions[Math.floor(Math.random() * directions.length)];
      index = ++index % maxIndex;
      isVisible = true;
    }, 100);
  };
</script>

<div class="h-full w-full">
  <div class="relative h-full w-full overflow-hidden">
    <Transition
      show={isVisible}
      class="h-full w-full transform motion-reduce:transition-none"
      enter="ease-in-out duration-1000 transform transition"
      enterFrom={direction.enterFrom}
      enterTo={direction.enterTo}
      leave="ease-in-out duration-1000 transform transition"
      leaveFrom={direction.leaveFrom}
      leaveTo={direction.leaveTo}
      on:afterLeave={afterLeave}
    >
      {#if index === 0}<slot name="0" />{/if}
      {#if index === 1}<slot name="1" />{/if}
      {#if index === 2}<slot name="2" />{/if}
      {#if index === 3}<slot name="3" />{/if}
      {#if index === 4}<slot name="4" />{/if}
      {#if index === 5}<slot name="5" />{/if}
      {#if index === 6}<slot name="6" />{/if}
      {#if index === 7}<slot name="7" />{/if}
      {#if index === 8}<slot name="8" />{/if}
      {#if index === 9}<slot name="9" />{/if}
    </Transition>
  </div>
</div>
