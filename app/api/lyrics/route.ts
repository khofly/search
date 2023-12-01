import { Client } from "genius-lyrics";

// export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET(request: Request) {
  const client = new Client();

  const { searchParams } = new URL(request.url);

  const q = searchParams.get("q") || "";

  const searches = await client.songs.search(q);
  const song = searches[0];

  const lyrics = await song?.lyrics();

  return Response.json({
    lyrics: lyrics,
    title: song?.title,
    artist: song?.artist.name,
    album: song?.album?.name,
    albumArt: song?.album?.image,
    releaseDate: song?.releasedAt,
    image: song?.image,
  });
}
