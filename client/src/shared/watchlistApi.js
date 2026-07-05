const API = "http://localhost:3001/api";

export async function getWatchlist() {
  const response = await fetch(`${API}/watchlist`);

  if (!response.ok) {
    throw new Error("Failed to fetch watchlist");
  }

  return response.json();
}