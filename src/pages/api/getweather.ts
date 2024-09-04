const API_KEY = import.meta.env.WEATHER_API_KEY;

export const prerender = false;

export async function GET() {
  const response = await fetch("urlhere", {});
  const data = response.json();
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
