import { writable } from "svelte/store";

type Store = {
  state: "setup" | "playing" | "done";
  players: string[];
  fields: number[];
  threshold: number;
};

export const turfWarsStore = {
  state: writable<Store["state"]>("setup"),
  players: writable<Store["players"]>([]),
  fields: writable<Store["fields"]>([20, 16, 15]),
  threshold: writable<Store["threshold"]>(3)
} as const;
