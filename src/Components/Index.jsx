import React from "react";
import { useGifs } from "../Hooks/useGifs";
//
const Index = () => {
  const { gifs } = useGifs();
  const hasGifs = gifs?.length > 0;
  return (
    <main className="bg-cyan-950 flex flex-wrap justify-center items-center w-full h-screen">
      <section className="absolute text-white text-xl bg-black/[90%] border-slate-100 border-[5px] w-[80%] flex flex-wrap justify-center items-center h-1/4">
        <p className="w-full text-center creepster text-green-500">🤪 ZAS 🤪</p>
        <p className="w-full flex justify-center creepster text-purple-400">
          🎉🎈¡¡¡FELIZ CUMPLEAÑOS!!!🎈🎉
        </p>
        <p className="w-full text-center yellowtail text-yellow-300">
          Que el destino siempre te de lo mejor
        </p>
        <p className="w-full text-center creepster text-lime-500">🤝 MY FRIEND OF MISERY 🤝</p>
      </section>
      {hasGifs ? (
        gifs.map((gif) => (
          <div key={gif.id} className="bg-slate-300 h-1/4 w-1/3">
            <img
              src={gif.images.fixed_height.url}
              alt={gif.title}
              className="h-full w-full"
            />
          </div>
        ))
      ) : (
        <p>Has no Gifs !</p>
      )}
    </main>
  );
};

export default Index;
