// src/app/api/news/route.js

export async function GET() {
  const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5dcd1fe338e34e83a5419fe240736159`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.status !== "ok") {
      return new Response(JSON.stringify({ error: data.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(data.articles), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch news" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
