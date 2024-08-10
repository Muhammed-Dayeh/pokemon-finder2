"use client"
import { useEffect, useState } from "react"
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input"
import { PokemonCard } from "./pokemon-card";

interface PokemonGridProps {
    pokemonList: any;
}

export function PokemonGrid({pokemonList}: PokemonGridProps) {
    const [SearchText, setSearchText] = useState("");

    console.log(pokemonList)

    const searchFilter = (pokemonList: any) => {
        return pokemonList.filter(
            (pokemon: any) => pokemon.name.toLowerCase().includes(SearchText.toLowerCase()))
    }

    const filteredPokemonList = searchFilter(pokemonList);
    return (
        <>
        <div>
            <h3 className="text-2xl py-6 text-center">Search For Your Pokemon!</h3>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="PokemonName">Pokemon Name</Label>
                <Input type="text"
                 id="PokemonName"
                 autoComplete="off"
                  placeholder="Charizard, Pikachu, etc."
                   value={SearchText}
                    onChange={(event) => setSearchText(event.target.value)}/>
            </div>
            <h3 className="text-3xl pt-12 pb-6 text-center">Pokemon Collection</h3>
        </div>
        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">

            {filteredPokemonList.map((pokemon : any) => {
                return(
                    <PokemonCard key={pokemon.id} name={pokemon.name}/>
                )
            })} 
      </div>
        </>
    )
}