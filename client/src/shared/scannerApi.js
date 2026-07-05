const API = "http://localhost:3001/api";

export async function getScanner() {
  const response = await fetch(`${API}/scanner`);

  if (!response.ok) {
    throw new Error("Failed to fetch scanner");
  }

  return response.json();
}