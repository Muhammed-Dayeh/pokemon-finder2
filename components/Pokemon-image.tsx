"use client"
import Image from "next/image"

type Props = {}

export  function PokemonImage({image, name} : {image: string, name: string}) {
  return (
    <Image 
    src={image} 
    alt={"Picture of" + name} 
    width="400"
    height="400"
/>
  )
}