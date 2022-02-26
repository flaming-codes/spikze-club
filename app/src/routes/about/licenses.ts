import type { EndpointOutput } from "@sveltejs/kit";
import licenses from "../../../static/licenses.json";

export async function get(): Promise<EndpointOutput> {
  // const url = "/licenses.json"; // "https://spikze.club/licenses.json"
  // const licenses = await fetch(url).then((response) => response.json());

  if (licenses) {
    return {
      body: { licenses }
    };
  }

  return {
    status: 500
  };
}
