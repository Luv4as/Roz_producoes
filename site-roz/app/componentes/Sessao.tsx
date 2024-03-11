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

        // <div className={` ${props.final ? 'bg-[#1335bd]' : 'bg-inherit' } `} >
        //   <div>
        //     <div className="flex flex-row mt-14 justify-between">
        //       <div className='flex flex-row justify-start items-start'>

        //         <div className='flex flex-row'>
        //           <h3 className="text-[#FF0000] font-bebas_neue font-black text-6xl tracking-tight ml-16 w-56">Roz Produz</h3>
        //           <div className='bg-black w-[0.2rem] h-14'></div>
        //         </div>
        //         <p className="text-black font-courier_prime text-lg ml-9 mt-5 ">{props.descricao}</p>

        //       </div>

        //       <p className="font-black text-6xl font-bebas_neue  ">{props.index}</p>           
        //     </div>
        //     <div className='bg-black ml-16 h-[0.2rem] w-screen'></div>
        //   </div>
        //     {props.children}
        // </div>
    )
}