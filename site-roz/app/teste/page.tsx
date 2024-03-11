import logo from '../../public/images/logo-roz.webp'
import vaso from '../../public/images/vaso.jpg'
import Image from "next/image"

export default function PaginaTeste(){
    return(

        <div className="">
            
            {/*Parte inicial*/}
            <div className='flex sm:flex-row gap-44'>
                <div className='flex flex-col items-end gap-96'>
                    <div className='flex items-center'>
                        <Image src={logo} alt='imagem ROZ' width={307} height={204} priority 
                        className={`
                            -rotate-[20deg] z-10 
                            mt-8 -mr-16 w-auto h-auto
                            `}>
                        </Image>
                        <h1 className='font-druk text-[9rem]'>PRODUZ</h1>
                    </div>
                    <pre className='text-gray-600 font-courier_prime text-xl underline decoration-solid'>ESTÚDIO CRIATIVO         RECIFE, 2024</pre>
                </div>
                <div>
                    <Image src={vaso} alt='Foto de um vaso' width={533} height={593} className='w-auto h-auto'></Image>
                </div>
            </div>




            <hr className="my-20"></hr>
            <div className="flex justify-between items-center ">
                <div className="flex flex-row items-center gap-3">
                    <h1 className="text-5xl font-druk text-[#FF0000]">ROZ PRODUZ</h1>
                    <div className="bg-black h-12 w-[0.15rem]"></div>
                    <p className="font-courier_prime">Sobre o estúdio</p>
                </div>
                <p className=" text-5xl font-druk">01</p>
            </div>
            <div className="bg-black w-screen h-[0.15rem] mr-10"></div>
        </div>
    )
}