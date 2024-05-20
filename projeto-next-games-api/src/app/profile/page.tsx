"use client"
import Image from "next/image";
import me from "../../../public/me.jpeg"
import share from "../../../public/share.svg"
import add from "../../../public/add.svg"
import Link from "next/link";
import { EventHandler, FormEvent, useEffect, useState } from "react";

export default function Profile() {
  const [input, setInput] = useState('')
  const [btn, setBtn] = useState(false)
  const [gameFavorite, setGameFavorite] = useState<string[]>([])
  const [favorite, setFavorite] = useState<string[]>([])

  useEffect(() => {
    const storageGame = localStorage.getItem("gameFavorite");
  if (storageGame !== null) {
    setFavorite(JSON.parse(storageGame));
  } else {
    setFavorite([]);
  }
  }, []);

  const handleGame = (e: FormEvent) => {
    if (!input.trim()) return; // Verifica se o input não está vazio ou contém apenas espaços em branco
    const updatedGames = [...gameFavorite, input];
    setGameFavorite(updatedGames);
    setInput('');
    localStorage.setItem("gameFavorite", JSON.stringify(updatedGames));
    setFavorite(updatedGames)
    setBtn(false)
  }

  return (
    <div>
      <div className="flex justify-between p-10">
        <div className="text-center">
          <Image
          className="rounded-full"
          alt="eu"
          src={me}
          width={200}
          height={200}
          />
          <p>Amanayara Dev</p>
        </div>
        <div>
          <Link rel="stylesheet" href="#">Configurações</Link>
          <Image
              alt="share"
              src={share}
              width={20}
              height={20}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-5 mb-3">
        <div className="bg-rose-400 justify-center p-4 w-80 min-w-72 gap-5">
          <div>
            {(!btn) ? (
              <button className="p-2" type="submit" onClick={() => setBtn(btn ? false : true)}>
                <Image
                alt="search"
                className="text-rose-950"
                src={add}
                width={20}
                height={20}
                />
              </button>
            ): 
            <div className="flex bg-rose-300 justify-between">
              <input className="bg-rose-300 text-red-950 block border-0 py-1.5 pl-1 appearance-none focus:outline-none focus:ring-0" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
              <button className="bg-rose-300" type="submit" onClick={(e) => handleGame(e)}>
                <Image
                alt="search"
                className="text-rose-950"
                src={add}
                width={20}
                height={20}
                />
              </button>
            </div>
            }
          <div>
            <h2>Jogos favoritos:</h2>
            {favorite.map((fav) => (
              <p>{fav}</p>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}