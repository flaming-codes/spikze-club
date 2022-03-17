import type { RequestHandler } from "@sveltejs/kit";

// Just for demo purposes.
export const get: RequestHandler = async () => ({
  status: 200,
  body: {
    values: ["production", "data", "not", "msw"]
  }
});
