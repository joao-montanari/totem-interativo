import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import SlideBar from '@/components/slidebar'
import Test from '@/components/test'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image/logo.png" />
      </Head>
      <main>
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
          <SlideBar/>
          <div className='pt-12 pl-10 w-[90%]'>
            <h1 className='text-5xl mb-8'>
              Home
            </h1>
            <p className='w-[95%] text-justify'>
              <strong>Objetivo do projeto: </strong> O objetivo do projeto é de desenvolver uma ferramente interativa que vai estar disposta em um Totem ajudando os colaboradores da ETS e da Bosch a solucioarem as suas duvidas referentes ao ambiente corporativo. Ademais, a mesma tem o objetivo de se tornar uma inteligência da empresa que integra inumeras funcionalidade e funções, tais como as já estabelecidas:
            </p>
            <ul className='list-disc pl-10'>
              <li>Agenda da Semana;</li>
              <li>Mapa da planta;</li>
              <li>Projetos da ETS;</li>
              <li>Grade de cursos;</li>
              <li>Resposta para perguntas frequêntes da Bosch.</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
