const API_URL = "http://localhost:3001/api";

export async function getDashboard() {
  const response = await fetch(`${API_URL}/dashboard`);

  if (!response.ok) {
    throw new Error("Failed to load dashboard");
  }

  return response.json();
}