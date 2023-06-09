import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import SlideBar from '@/components/slidebar'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [aba, setAba] = useState(true);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image/logo.png" />
      </Head>
      <main className='font-mono'>
        <div className="w-full h-2">
          <Image
            width={100}
            height={100}
            alt="faixa Bosch"
            className="h-full w-full object-cover"
            src="/image/bosch_faixa.svg"
          />
        </div>
        <div className='flex'>
          <div className='top-0 left-0 fixed'>
            <SlideBar
              setTrigger={setAba}
            />
          </div>
          <div className={`${aba ? "pl-80" : "pl-28"} pt-12 w-full duration-300`}>
            <h1 className='text-5xl mb-8 font-bold'>
              Home
            </h1>
            <p className='w-[95%] text-justify'>
              <strong>Objetivo do projeto: </strong> O objetivo do projeto é de desenvolver uma ferramente interativa que vai estar disposta em um Totem ajudando os colaboradores da ETS e da Bosch a solucionarem as suas duvidas referentes ao ambiente corporativo. Ademais, a mesma tem o objetivo de se tornar uma inteligência da empresa que integra inumeras funcionalidade, tais como as já estabelecidas:
            </p>
            <ul className='list-disc pl-10 mb-8'>
              <li>
                Agenda da Semana;
              </li>
              <li>
                Mapa da planta;
              </li>
              <li>
                Projetos da ETS;
              </li>
              <li>
                Grade de cursos;
              </li>
              <li>
                Resposta para perguntas frequentes da Bosch.
              </li>
            </ul>
            <h2 className='text-3xl mb-3'>
              📄 Documentação Completa:
            </h2>
            <Image
              src={'/image/qrcode_documentacao.png'}
              width={200}
              height={100}
              alt="QRCode da documentacao"
              className='ml-5 p-2 border-2 border-gray-600 rounded-lg mt-5'
            />
          </div>
        </div>
      </main>
    </>
  )
}
