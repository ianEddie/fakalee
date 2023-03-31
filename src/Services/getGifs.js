import { API_URL } from "./API_URL";
//
export async function getGifs() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json.data;
}
