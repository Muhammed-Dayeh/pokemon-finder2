import { PokemonCard } from "@/components/pokemon-card";
import { PokemonGrid } from "@/components/pokemon-grid";
import Image from "next/image";
import { getPokemonList } from "@/lib/pokemonAPI";

export default async function Home() {

  const pokemonList = await getPokemonList();
  return (
    
<PokemonGrid pokemonList={pokemonList} />
      
  );
}
