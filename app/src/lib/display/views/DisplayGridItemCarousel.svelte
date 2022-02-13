<script lang="ts">
  import { Transition, TransitionChild } from "@rgossiaux/svelte-headlessui";
  import { directions } from "../models/space";

  export let withInitialDelay: number = undefined;
  export let withRandomSeedInitialDelay: number = undefined;
  export let countItems: number;

  let index = 0;
  let isVisible = true;
  let direction = directions[0];
  let timer: NodeJS.Timeout;

  $: if (isVisible) {
    const getDelay = () => {
      const ms = 3_000;

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
      console.log("-- isVisible timeout resolved");

      isVisible = false;
    }, getDelay());
  }

  $: if (!isVisible) {
    clearTimeout(timer);
  }

  const afterLeave = () => {
    console.log("-- afterLeave");

    setTimeout(() => {
      console.log("-- afterLeave timeout resolved");

      const maxIndex = countItems;

      direction = directions[Math.floor(Math.random() * directions.length)];
      index = ++index % maxIndex;
      isVisible = true;
    }, 100);
  };

  $: console.log("index", index, "isVisible", isVisible);
</script>

<div class="h-full w-full">
  <div class="relative h-full w-full overflow-hidden">
    <Transition show={isVisible}>
      <TransitionChild
        class="h-full w-full transform transition-all"
        enter="ease-in-out duration-700 transform transition"
        enterFrom={direction.enterFrom}
        enterTo={direction.enterTo}
        leave="ease-in-out duration-700 transform transition"
        leaveFrom={direction.leaveFrom}
        leaveTo={direction.leaveTo}
        on:afterLeave={afterLeave}
      >
        {#if index === 0}<slot name="0" />{/if}
        {#if index === 1}<slot name="1" />{/if}
        {#if index === 2}<slot name="2" />{/if}
      </TransitionChild>
    </Transition>
  </div>
</div>
