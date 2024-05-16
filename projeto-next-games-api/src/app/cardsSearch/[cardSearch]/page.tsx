import { Header } from "@/components/header/page";
import { Search } from "@/components/search";
import DataProps from "@/utils/gameProps"
import Image from "next/image"

//https://sujeitoprogramador.com/next-api/?api=games *allgames
//https://sujeitoprogramador.com/next-api/?api=game&title=the *somegames

async function getData(title: string) {
  try {
    // console.log(title)
    const decodeTitle = decodeURI(title)

    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodeTitle}`)
    return res.json();
  } catch (err) {
    return null;
  }
}

export default async function Procura({
  params: {cardSearch}
}: {params: {cardSearch: string}}) {
  const games: DataProps[] = await getData(cardSearch);

  return(
    <div className="">
      <Search/>
      <div className="grid text-center justify-center ">
        <div className="flex flex-wrap justify-center">
          {
            !games && (<p>falhou</p>)
          }
            {games &&
              games.map((game) => (
                <div key={game.id} className="">
                  <div className=" grid bg-rose-200 px-3 items-center py-10 w-60 h-60 gap-5 m-4 rounded-md">
                    <Image
                    className=""
                    src={game.image_url}
                    alt={game.description}
                    width={250}
                    height={250}
                    />
                    <p className="text-center">{game.title}</p>
                  </div>
                </div>
              ))
            }
        </div>
      </div>
  </div>
  )
}