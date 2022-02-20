import { writable } from "svelte/store";

type Store = {
  state: "setup" | "playing" | "done";
  players: string[];
  fields: number[];
  threshold: number;
  winnerIndex?: number;
};

const writables = {
  state: writable<Store["state"]>("setup"),
  players: writable<Store["players"]>([]),
  fields: writable<Store["fields"]>([20, 16, 15]),
  threshold: writable<Store["threshold"]>(3),
  winnerIndex: writable<Store["winnerIndex"]>(undefined)
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
