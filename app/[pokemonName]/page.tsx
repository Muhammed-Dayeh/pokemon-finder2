
import { getPokemon } from "@/lib/pokemonAPI";

import Image from 'next/image';

export default async function PokemonPage({ params }: { params: { pokemonName: string } }) {
    const { pokemonName } = params;

    const pokemon = await getPokemon(pokemonName);

    return (
        <>
            <h1 className="text-4xl font-bold pt-4">{pokemonName}</h1>
            <Image 
                src={pokemon.sprites.other['official-artwork'].front_default} 
                alt={"Picture of" + pokemonName} 
                width="400"
                height="400"
            />
        </>
    );
}