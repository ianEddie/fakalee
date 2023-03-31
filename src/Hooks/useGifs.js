import { useEffect, useState } from "react";
import { getGifs } from "../Services/getGifs";
//
export function useGifs() {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    getGifs().then((newGifs) => setGifs(newGifs));
  }, []);
  return { gifs };
}
