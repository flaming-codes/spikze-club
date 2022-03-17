import { browser, dev } from "$app/env";

export async function inject() {
  if (dev && browser) {
    const { worker } = await import("../msw/worker");
    return worker.start({ onUnhandledRequest: "bypass" }).catch(console.warn);
  }
  if (dev && !browser) {
    const { server } = await import("../msw/server");
    return server.listen({ onUnhandledRequest: "bypass" });
  }
}
