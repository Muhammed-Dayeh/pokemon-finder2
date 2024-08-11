import Link from "next/link"


interface PokemonCardProps {
    name: string;
}

export function PokemonCard({ name }: PokemonCardProps) {
    return (
        <Link
          href={name}
          className=" rounded-lg border  m-3 px-3 py-4 transition-colors border-gray-500 dark:border-gray-500  hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          key={name + "card"}
        >
          <h2 className=" text-2xl font-semibold text-center">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </h2>
         
        </Link>
    )
}