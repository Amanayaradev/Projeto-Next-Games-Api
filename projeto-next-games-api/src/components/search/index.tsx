"use client"
import Image from "next/image"
import search from "../../../public/search.svg"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

export function Search(){
  const [input, setInput] = useState("")

  const router = useRouter();

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    if(input === "") return;
    router.push(`/cardsSearch/${input}`)
  }
  
  return (
    <section>
      <form className="w-full bg-rose-300 flex gap-2 items-center justify-between rounded-lg p-4
      m-auto max-w-screen-xl mt-5
      ">
        <input
          className="bg-rose-300 outline-none placeholder-slate-600 p-1"
          type="text" placeholder="procure o jogo..."
          value={input}
          onChange={(event) => setInput(event.target.value)} />
        <button type="submit" onClick={(e) => handleSearch(e)}>
          <Image
          src={search}
          alt="icone de pesquisa"
          />
        </button>
      </form>
    </section>
  )
}