import { writable } from "svelte/store";
import { getBaseGameStoreWritables, type BaseGameStore } from "./base";

type Store = BaseGameStore & {
  fields: number[];
};

const writables = {
  ...getBaseGameStoreWritables(),
  fields: writable<Store["fields"]>([20, 16, 15])
};

export const turfWarsStore = {
  ...writables,
  reset: () => {
    writables.state.set("setup");
    writables.players.set([]);
    writables.fields.set([20, 16, 15]);
    writables.threshold.set(3);
    writables.winnerIndex.set(undefined);
  }
} as const;
