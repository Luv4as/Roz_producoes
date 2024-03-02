import { Carousel } from "@material-tailwind/react"
import Image, { StaticImageData } from "next/image"

interface CarroselProps{
    tamanho: string
    imagem1?: string
    imagem2?: string
    imagem3?: string
    imagem4?: string
    imagem5?: string
}


export default function Carrosel(props: CarroselProps) {
    return(
        <Carousel className={`rounded-xl ${props.tamanho}`}>
            <Image 
                src={props.imagem1}
                alt="imagem teste"
                width={600} height={600}
                className=" h-full w-full object-cover"
                >
            </Image>
            <Image 
                src={props.imagem2}
                alt="imagem teste"
                width={600} height={600}
                className=" h-full w-full object-cover"
                >
            </Image>
            <Image 
                src={props.imagem3}
                alt="imagem teste"
                width={600} height={600}
                className=" h-full w-full object-cover"
                >
            </Image>
            <Image 
                src={props.imagem4}
                alt="imagem teste"
                width={600} height={600}
                className=" h-full w-full object-cover"
                >
            </Image>
            <Image 
                src={props.imagem5}
                alt="imagem teste"
                width={600} height={600}
                className=" h-full w-full object-cover"
                >
            </Image>
        </Carousel>
    )
}