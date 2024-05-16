import { Header } from "@/components/header/page";
import { Search } from "@/components/search";
import { CardAleatorio } from "../components/games/card/cardAleatorio/page";
import { AllCards } from "../components/games/card/allCards/page";


export default async function Home() {
  return (
    <main>
      <CardAleatorio/>
      <Search/>
      <AllCards/>
    </main>
  );
}
