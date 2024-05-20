import DataProps from "@/utils/gameProps";
import Image from "next/image";

async function getId(id:number) {
  try {
    const dataId = await fetch(`https://sujeitoprogramador.com/next-api/?api=game&id=${id}`)
    console.log(dataId.json())
    return dataId.json();
  } catch (error) {
    console.log(error)
  }
}

export default async function Details({
  params: {id}
}: {params: {id: number}}) {
  const game: DataProps[] = await getId(id);

  return(
    <div className="">
      <h1>teste</h1>
      <div className="grid text-center justify-center ">
        <div className="flex flex-wrap justify-center">
          {
            !game && (<p>falhou</p>)
          }
            {game &&
              game.map((game) => (
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