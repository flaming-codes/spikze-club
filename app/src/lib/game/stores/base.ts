import { writable } from "svelte/store";

export type BaseGameStore = {
  state: "setup" | "playing" | "done";
  players: string[];
  threshold: number;
  winnerIndex?: number;
};

export function getBaseGameStoreWritables() {
  return {
    state: writable<BaseGameStore["state"]>("setup"),
    players: writable<BaseGameStore["players"]>([]),
    threshold: writable<BaseGameStore["threshold"]>(3),
    winnerIndex: writable<BaseGameStore["winnerIndex"]>(undefined)
  };
}
