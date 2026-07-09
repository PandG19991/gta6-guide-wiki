import type { APIRoute } from "astro";
import { site } from "@data/site";

export const GET: APIRoute = () =>
  new Response(
    [
      `Contact: ${new URL("/contact/", site.url).toString()}`,
      "Expires: 2027-07-08T00:00:00Z",
      "Preferred-Languages: en",
      `Policy: ${new URL("/editorial-policy/", site.url).toString()}`
    ].join("\n") + "\n",
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8"
      }
    }
  );
