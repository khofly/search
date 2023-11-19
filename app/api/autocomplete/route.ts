export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const q = searchParams.get("q");
  const autocompleteEngine = searchParams.get("engine") as
    | "duckduckgo"
    | "google";

  const autocompleteUrl = {
    google: `https://www.google.com/complete/search?q=${q}&client=firefox`,
    duckduckgo: `https://duckduckgo.com/ac/?q=${q}&type=list`,
  }[autocompleteEngine || "duckduckgo"];

  const res = await fetch(autocompleteUrl);

  const data = await res.json();

  return Response.json({ data });
}
