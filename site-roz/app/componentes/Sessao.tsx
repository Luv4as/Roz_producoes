import { ReactNode } from 'react'

interface Sessaoprops {
  children: ReactNode
  index: string
  descricao?: string
  final?: boolean
}

export default function Sessao(props: Sessaoprops)  {
    return (
      <div className={` mt-14 ${props.final ? 'bg-[#1335bd]' : 'bg-inherit' } `}>
            <div className="flex justify-between items-center ">
                <div className="flex flex-row items-center ml-10 gap-3">
                    <h1 className="text-5xl font-druk text-[#FF0000]">ROZ PRODUZ</h1>
                    <div className="bg-black h-12 w-[0.15rem]"></div>
                    <p className="font-courier_prime">{props.descricao}</p>
                </div>
                <p className=" text-5xl font-druk mr-10">{props.index}</p>
            </div>
            <div className="bg-black w-screen h-[0.15rem] mr-10"></div>
            {props.children}
        </div>
    )
}