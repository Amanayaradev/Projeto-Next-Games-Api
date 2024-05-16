import Image from "next/image";

interface DataProps {
  id: number,
  title: string,
  description: string,
  image_url: string,
  platforms: string[],
  categories: string[],
  release: string
}

async function Data() {
  try {
    const response = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, { next: { revalidate: 10 } })
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export async function CardAleatorio(){
  const games: DataProps = await Data();
  return(
    <div className="w-full bg-pink-950 rounded-lg mb-5">
      <h1 className="text-white text-center">Separamos um jogo exclusivo pra você</h1>
      <div className="w-full max-h-96 h-96 relative rounded-lg">
      <Image
      src={games.image_url}
      alt={games.description}
      priority={true}
      quality={100}
      fill={true}
      className="max-h-96 object-right-top object-cover rounded-lg opacity-50 hover:opacity-100 transition-all duration-300"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
      />
      </div>
    </div>
  )
}