import { Carousel } from "@material-tailwind/react"
import Image, { StaticImageData } from "next/image"
import { Url } from "next/dist/shared/lib/router/router"


interface CarroselProps{
    tamanho: string
    imagem1?: Url
    imagem2?: Url
    imagem3?: Url
    imagem4?: Url
    imagem5?: Url
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