import { getSongList } from "~/utils/getSongList";

export const prerender = false;

export async function GET() {
  const files = await getSongList();
  return new Response(JSON.stringify(files), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
