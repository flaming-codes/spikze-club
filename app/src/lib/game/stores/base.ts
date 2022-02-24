import { writable, type Writable } from "svelte/store";

/**
 * Complete shape of a game store, which can be used
 * to pick types from.
 */
export type GameStore = {
  state: "setup" | "playing" | "done";
  players: string[];
  threshold: number;
  winnerIndex?: number;
  playerFieldMap: Record<string, number>;
};

/**
 * All writables as types.
 */
export type GameStoreWritable = {
  [k in keyof GameStore]: Writable<GameStore[k]>;
};

export type BaseGameStore = Pick<GameStore, "state" | "players" | "threshold" | "winnerIndex">;

export type BaseGameStoreWritable = ReturnType<typeof getBaseGameStoreWritables>;

export function getBaseGameStoreWritables(store?: Partial<BaseGameStore>) {
  return {
    state: writable<BaseGameStore["state"]>(store?.["state"] ?? "setup"),
    players: writable<BaseGameStore["players"]>(store?.["players"] ?? []),
    threshold: writable<BaseGameStore["threshold"]>(store?.["threshold"] ?? 3),
    winnerIndex: writable<BaseGameStore["winnerIndex"]>(store?.["winnerIndex"] ?? undefined)
  };
}
