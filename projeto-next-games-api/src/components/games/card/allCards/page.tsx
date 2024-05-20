import DataProps from "@/utils/gameProps"
import Image from "next/image"
import Link from "next/link"

//https://sujeitoprogramador.com/next-api/?api=games *allgames
//https://sujeitoprogramador.com/next-api/?api=game&title=the *somegames

async function DataCards() {
  try {
    let apiUrl = `${process.env.NEXT_API_URL}/next-api/?api=games`
    const response = await fetch(apiUrl)

    return response.json()
  } catch (error) {
    console.log(error)
  }
}
// const teste = DataCards("the")
// console.log("teste jogos:", )

export async function AllCards() {
  
  const dataGames: DataProps[] = await DataCards();

  
  return(
    <div className="m-auto grid max-w-screen-xl items-center justify-center">
      <div className="grid grid-cols-4 max-w-screen-lg">
      {dataGames &&
        dataGames.map((game) => (
          <div key={game.id} className="self-center flex w-64">
            <Link href={`/datails/${game.id}`}>
            <div className="bg-rose-200 px-3 py-10 w-60 h-60 gap-5 m-4 rounded-md">
              <Image
              className=""
              src={game.image_url}
              alt={game.description}
              width={250}
              height={250}
              />
              <p className="text-center">{game.title}</p>
            </div>
            </Link>
          </div>
        ))
      }
      </div>
    </div>
  )
}