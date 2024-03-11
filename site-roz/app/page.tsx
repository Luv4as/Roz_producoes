'use client'

import Image from "next/image"
import logo from '../public/images/logo-roz.webp'
import vaso from '../public/images/vaso.jpg'
import gomes from '../public/images/gomes-pic.webp'
import assinatura from '../public/images/assinatura.webp'
import album from '../public/images/larga_esse_boy.webp'
import Sessao from "./componentes/Sessao"
import Carrosel from "./componentes/Carrosel"


export default function Home() {

  return (
    <div className="flex flex-col">
      
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

        {/*SOBRE O ESTUDIO - 1*/}
        <Sessao index='01' descricao='Sobre o estudio criativo'>
          <div className="flex md:flex-row sm:flex-col justify-evenly mt-24">
            <h1 className={`text-black text-8xl font-bebas_neue font-black ml-11
                tracking-tight leading-tight underline decoration-solid z-10`}>
                  Design,<br/>direção de arte<br/>& fotografia.
            </h1>
            <div className="relative m-{2rem} -ml-60 -mt-20 ">
              <Image src={gomes} width={172} height={238} alt="Retrato do artista gomes"></Image>
            </div>
            <div className={`flex flex-col font-courier_prime text-base break-words`}>
              <p className=" w-[40rem] mb-8 text-justify">Criada por GOMES, 22 anos, artista e graduando da UFPE em design, a Roz nasceu em março de 2023 sendo um estúdio criativo que abraça diversas formas do fazer artístico - desde o design e direção de arte, até a captação e edição do produto.</p>

              <p className=" w-[40rem] mb-8 text-justify ">O estúdio é a junção de atividades que seu idealizador vem desempenhando desde 2018, e possui três principais pilares: <u>design, direção de arte, captação e edição de fotografias e vídeos.</u> Colaborando hoje com diferentes nichos, como festivais de música; artistas, bandas e criadores de conteúdo.</p>
                  
              <div className="flex justify-end">
                <Image src={assinatura} alt="assinatura gomes" width={517} height={361} className=" w-64"></Image>
              </div>  
            </div>
          </div>

        </Sessao>
          
        {/*O BARCO - 2*/}
        <Sessao index='02' descricao='"O barco" - Ânima'>
          <div className="flex md:flex-row sm:flex-col mt-40 justify-center mr-16">
              <div className="flex flex-col items-baseline mr-5">
                  <h1 className={`text-black text-8xl font-bebas_neue font-black tracking-tight leading-tight underline decoration-solid`}>
                  O barco</h1>
                  <p className="font-courier_prime text-base z-20 ">Direção de arte, design e<br/> captação para o single da<br/> Ânima, banda recifense.</p>
                  <p className="font-courier_prime text-base z-20 mt-16">05/2023</p>
              </div>
              <Carrosel tamanho=" h-[30rem] w-[50rem]" imagem1=" https://d2kq0urxkarztv.cloudfront.net/651a2c9f20581300711d89bf/4431194/image-5fba50e8-d043-41af-8650-e95514ec6231.png?e=webp&nll=true" imagem2="https://d2kq0urxkarztv.cloudfront.net/651a2c9f20581300711d89bf/4431194/image-778b127e-a2b7-4eab-a29f-735cbb57f0c1.png?e=webp&nll=true" imagem3="https://d2kq0urxkarztv.cloudfront.net/651a2c9f20581300711d89bf/4431194/image-691d6e04-f8f8-411d-88f1-2ffa513ea9c0.png?e=webp&nll=true" imagem4="https://d2kq0urxkarztv.cloudfront.net/651a2c9f20581300711d89bf/4431194/image-21e35814-b7cd-4773-8086-19e81553e6bc.png?e=webp&nll=true" imagem5={undefined}></Carrosel>
          </div>
        </Sessao>

        {/*LARGA ESSE BOY - 3*/}
        <Sessao index='03' descricao='"Larga esse boy" - Jáder ft. JH'>
          <div className="flex md:flex-row sm:flex-col mt-14">
                <Image src={album} alt="capa do album 'Larga esse boy'" width={550} height={550} className={`
                  
                `}></Image>
                <div className="flex flex-col items-end mt-28 ">
                  <h1 className={`text-black text-8xl font-bebas_neue font-black
                  tracking-tight leading-tight underline decoration-solid -m-8 mb-5`}>
                    Larga esse Boy
                  </h1>
                  <div className=" font-courier_prime text-base w-[20rem] text-right ">
                    <p className=" mb-8">Design para a capa da versão acústica de &quotLarga esse Boy&quot, single de Jáder e Jhonny Hooker</p>

                    <p className=""> 08/2023 </p>
                  </div>
                  
                </div>
            </div>
        </Sessao>
        
        {/*ALGAZARRA - 4*/}
        <Sessao index='04' descricao='"VLA" - festival Viva La Algazara'>
        <div className="flex md:flex-row sm:flex-col mt-28 justify-center">
            <div className="flex flex-col items-end mt-20">
                <h1 className={`text-black text-8xl font-bebas_neue font-black
                tracking-tight leading-tight underline decoration-solid z-10`}>
                Viva la Algazarra</h1>
                <p className=" font-courier_prime text-base mb-8 mr-8 text-justify">Design e direção artística<br/> para a segunda edição do<br/> festival Viva La Algazarra,<br/> que aconteceu em Recife.</p>
                <p className=" font-courier_prime text-base mb-8 mr-8 text-justify ">06/2023</p>
            </div>
            <Carrosel tamanho=" w-[35rem] h-[50rem]" imagem1={'https://d2kq0urxkarztv.cloudfront.net/651a2c9f20581300711d89bf/4431194/image-aba89e01-547f-401c-adf1-e6c02b9f63ac.jpg?h=1311&e=webp'} imagem2={'https://d2kq0urxkarztv.cloudfront.net/651a2c9f20581300711d89bf/4431194/image-c7584bd1-1fa3-4bf9-9b85-98486f7f53fd.jpg?h=1311&e=webp'} imagem3={'https://d2kq0urxkarztv.cloudfront.net/651a2c9f20581300711d89bf/4431194/image-a7db23ea-2476-4075-b277-2013e28ee027.jpg?h=1311&e=webp'} imagem4={'https://d2kq0urxkarztv.cloudfront.net/651a2c9f20581300711d89bf/4431194/image-bc3fc80d-b6b8-43f0-8e86-90c1fd75fb33.jpg?h=1311&e=webp'} imagem5={undefined}></Carrosel>
          </div>
        </Sessao>
        
        {/*AMORIM - 5*/}
        <Sessao index='05' descricao='@amorimrafaela - Rafa Amorim'>
          <div className="flex md:flex-row sm:flex-col mt-28 mb-8 justify-center">
              <div className="flex flex-col items-end ">
                  <h1 className={`text-black text-8xl font-bebas_neue font-black tracking-tight leading-tight underline decoration-solid z-10`}>
                    @AMORIMRAFAELA</h1>
                  <p className=" font-courier_prime text-base mb-8 ml-8 mr-8 text-justify">Design, captação e design<br/> para a criadora de conteúdo<br/> Rafaela Amorim.</p>
                  <p className=" font-courier_prime text-base mb-8 mr-8 text-justify">Nas imagens, publicidades<br/> para as marcas @somosderiva<br/> e @use.bob </p>

                  <p className=" font-courier_prime text-2xl mb-8 mr-8 text-justify ">2023</p>
              </div>
              <Carrosel tamanho=" w-[25rem] h-[40rem]" imagem1={'https://d2kq0urxkarztv.cloudfront.net/651a2c9f20581300711d89bf/4431194/image-ff40b8f3-507f-48c5-9908-f0fa22f74a19.jpg?h=1311&e=webp'} imagem2={'https://d2kq0urxkarztv.cloudfront.net/651a2c9f20581300711d89bf/4431194/image-ed2b9c06-93e1-41e1-beb0-179cb1018cba.jpg?h=1311&e=webp'} imagem3={'https://d2kq0urxkarztv.cloudfront.net/651a2c9f20581300711d89bf/4431194/image-adc83477-b058-4965-b79c-7a49a2d094b7.jpg?h=1311&e=webp'} imagem4={'https://d2kq0urxkarztv.cloudfront.net/651a2c9f20581300711d89bf/4431194/image-2751e18d-2ac0-4cc1-91c3-4b49266ca36d.jpg?h=1311&e=webp'} imagem5={'https://d2kq0urxkarztv.cloudfront.net/651a2c9f20581300711d89bf/4431194/image-201e7375-d986-4f97-a152-0a02bc1c8916.jpg?h=1311&e=webp'}></Carrosel>
            </div>
        </Sessao>
        
        {/*CONTATO - 6*/}
        <Sessao index='06' descricao='Contato' final >
            <div className="flex md:flex-row sm:flex-col justify-center items-center h-[94.5vh]">
              <div className=" flex md:flex-row sm:flex-col justify-center items-end">
                <h1 className={`text-[#FF0000] text-[14rem] font-bebas_neue font-black ml-11
                tracking-tight leading-none underline decoration-solid z-10  `}>
                  Vamos<br/>criar?</h1>
                  <p className="text-white font-courier_prime text-2xl w-[50rem] ml-8 mt-8 text-justify underline decoration-solid">envie sua proposta.<br/> <a href='mailto:rozproduz@gmail.com' target="_blank">rozproduz@gmail.com</a> / <a href={'https://www.instagram.com/rozproduz/'} target="_blank" >@rozproduz</a></p>               
              </div>
            </div>
        </Sessao>

    </div>
  )
}
