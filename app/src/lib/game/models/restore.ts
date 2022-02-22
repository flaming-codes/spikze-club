import { browser } from "$app/env";
import { tick } from "svelte";

export async function restoreItems<T>(params: { key: string; resolver: (data: T[]) => void }) {
  const { key, resolver } = params;

  if (!browser) return;
  // Restore common values.
  await tick();
  resolver(JSON.parse(localStorage.getItem(key) || "[]"));
}
