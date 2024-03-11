import logo from '../../public/images/logo-roz.webp'
import vaso from '../../public/images/vaso.jpg'
import Image from "next/image"

export default function PaginaTeste(){
    return(

        <div className="">
            
            {/*Parte inicial*/}
            <div className='flex gap-44'>
                <div className='flex flex-col items-end gap-96'>
                    <div className='flex items-center'>
                        <Image src={logo} alt='imagem ROZ' width={307} height={204} priority 
                        className={` -rotate-[20deg] z-10 mt-8 -mr-16`}></Image>
                        <h1 className='font-druk text-[9rem]'>PRODUZ</h1>
                    </div>
                    <pre className='text-gray-600 font-courier_prime text-xl underline decoration-solid'>ESTÚDIO CRIATIVO         RECIFE, 2024</pre>
                </div>
                <div>
                    <Image src={vaso} alt='Foto de um vaso' width={533} height={593}></Image>
                </div>
            </div>




            {/* <div className="flex flex-row justify-between">
                <div className=" flex flex-col justify-center items-end">
                    <div className=" flex flex-row -mt-10">
                        <Image src={logo} alt="Logo Roz png" width={957} height={638} priority className=" w-[27rem] h-[15rem] mt-12 -mr-28 z-10 -rotate-[20deg]"></Image>
                        <h1 className="text-black text-[12rem]  font-druk font-black">PRODUZ</h1>
                    </div>
                    <pre className="text-gray-600 font-courier_prime text-2xl mt-[27rem] underline decoration-solid">ESTÚDIO CRIATIVO         RECIFE, 2023</pre>
                </div>
                <div className=" lg:w-[41rem] mr-20">
                    <Image src={vaso} alt="Vaso vidro mãos" width={895} height={995} className="fill"></Image>
                </div>
            </div> */}


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