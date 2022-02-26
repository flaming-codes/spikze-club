import { writable } from "svelte/store";
import { getBaseGameStoreWritables, type BaseGameStore, type GameStore } from "./base";

// 'threshold' is the number of hits required
// to move between fields, '1' by default.
type Store = BaseGameStore & Pick<GameStore, "playerFieldMap">;

const writables = {
  ...getBaseGameStoreWritables({ threshold: 1 }),
  state: writable<BaseGameStore["state"]>("setup"),
  players: writable<BaseGameStore["players"]>([]),
  playerFieldMap: writable<Store["playerFieldMap"]>({})
};

export const aroundTheClockStores = {
  ...writables,
  reset: () => {
    writables.state.set("setup");
    writables.players.set([]);
    writables.playerFieldMap.set({});
    writables.threshold.set(1);
    writables.winnerIndex.set(undefined);
  }
} as const;
