import { writable } from "svelte/store";
import { getBaseGameStoreWritables, type BaseGameStore } from "./base";

// 'threshold' is the number of hits required
// to move between fields, '1' by default.
type Store = BaseGameStore & {
  playerFieldMap: Record<string, number>;
};

const writables = {
  ...getBaseGameStoreWritables(),
  playerFieldMap: writable<Store["playerFieldMap"]>({})
};

export const turfWarsStore = {
  ...writables,
  reset: () => {
    writables.state.set("setup");
    writables.players.set([]);
    writables.playerFieldMap.set({});
    writables.threshold.set(1);
    writables.winnerIndex.set(undefined);
  }
} as const;
