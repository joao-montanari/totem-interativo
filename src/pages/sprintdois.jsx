import Head from "next/head"
import Image from "next/image"
import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from "react"
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import Carrossel from "@/components/carrossel"

import SlideBar from "@/components/slidebar"

export default function sprintDois() {
    const [aba, setAba] = useState(true);
    const [width, setWidth] = useState(0);
    const [curr, setCurr] = useState(0);

    const totem = [
        '/image/totem/1.jpg',
        '/image/totem/2.jpg',
        '/image/totem/3.jpg',
        '/image/totem/4.jpg',
        '/image/totem/5.jpg',
        '/image/totem/6.jpg',
        '/image/totem/7.jpg',
        '/image/totem/10.jpg',
    ]

    const visual = [
        '/image/visual/1.png',
        '/image/visual/2.png',
        '/image/visual/3.png',
        '/image/visual/4.png',
    ]

    return(
        <>
            <Head>
                <title>2º Sprint</title>
                <link rel="icon" href="/image/logo.png" />
            </Head>
            <main className="font-mono">
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
                            2º Sprint
                        </h1>
                        <h2 className="text-3xl mb-3">
                            🏆 Metas Definidas:
                        </h2>
                        <ul className="list-disc pl-8 text-gray-500 mb-8">
                            <li>Reserva de salas;</li>
                            <li>Mapa da planta;</li>
                            <li>Montagem da parte física;</li>
                            <li>Desenvolvimento da interface.</li>
                        </ul>
                        <h2 className="text-3xl mb-3">
                            🎯 Divisão de Tarefas:
                        </h2>
                        <ul className="list-disc pl-8 text-gray-500 mb-20">
                            <li>
                                <strong>Daniel Dante: </strong>
                                Mapa da planta;
                            </li>
                            <li>
                                <strong>Giovanna Freitas: </strong>
                                Desenvolvimento da interface;
                            </li>
                            <li>
                                <strong>João Montanari: </strong>
                                Montagem física do totem;
                            </li>
                            <li>
                                <strong>Maitê Favaro: </strong>
                                Montagem física do totem;
                            </li>
                            <li>
                                <strong>Naiury Chaves: </strong>
                                Desenvolvimento da interface.
                            </li>
                        </ul>
                        <h2 className="text-3xl mb-3">
                            ⌨️ Tecnologias usadas:
                        </h2>
                        <ul className="flex justify-around w-[95%] text-gray-500 mb-20 mt-4 py-6 bg-gray-100 rounded-md shadow">
                            <li className="w-28 text-center p-2 rounded-md border border-slate-300 shadow-lg hover:bg-slate-200 hover:shadow-none hover:border-slate-200 duration-300">
                                <Image
                                    src={'/image/blender.png'}
                                    width={50}
                                    height={50}
                                    alt='Next JS'
                                    className="m-auto"
                                />
                                Blender
                            </li>
                            <li className="w-28 text-center p-2 rounded-md border border-slate-300 shadow-lg hover:bg-slate-200 hover:shadow-none hover:border-slate-200 duration-300">
                                <Image
                                    src={'/image/canva.webp'}
                                    width={50}
                                    height={50}
                                    alt='SQLite'
                                    className="m-auto"
                                />
                                Canva
                            </li>
                            <li className="w-28 text-center p-2 rounded-md border border-slate-300 shadow-lg hover:bg-slate-200 hover:shadow-none hover:border-slate-200 duration-300">
                                <Image
                                    src={'/image/solidworks.png'}
                                    width={50}
                                    height={50}
                                    alt='Fast API'
                                    className="m-auto"
                                />
                                SolidWorks
                            </li>
                            <li className="w-28 text-center p-2 rounded-md border border-slate-300 shadow-lg hover:bg-slate-200 hover:shadow-none hover:border-slate-200 duration-300">
                                <Image
                                    src={'/image/nextjs.svg'}
                                    width={50}
                                    height={50}
                                    alt='Figma'
                                    className="m-auto"
                                />
                                Next Js
                            </li>
                            <li className="w-28 text-center p-2 rounded-md border border-slate-300 shadow-lg hover:bg-slate-200 hover:shadow-none hover:border-slate-200 duration-300">
                                <Image
                                    src={'/image/ThreeJs.png'}
                                    width={50}
                                    height={50}
                                    alt='Machine Learning'
                                    className="m-auto"
                                />
                                Three JS
                            </li>
                        </ul>
                        <div className="border border-gray-500 w-[95%] rounded-md p-10 text-gray-500 text-justify mb-20 shadow-xl">
                            <h2 className="text-3xl mb-5 text-black">
                                🗺️ Mapa da planta:
                            </h2>
                            <p className="font-bold mt-3">
                                Ações tomadas:
                            </p>
                            <ul className="list-disc pl-7">
                                <li className="mt-1">Estudo de ferramentas;</li>
                                <li className="mt-1">Identificação e localização de cada área planta da Bosch Campinas;</li>
                                <li className="mt-1">Identificação de rotas e estradas;</li>
                                <li className="mt-1">Esboço de cada prédio;</li>
                                <li className="">Inicio da estilização dos prédios.</li>
                            </ul>
                        </div>
                        <div className="border border-gray-500 w-[95%] rounded-md p-10 text-gray-500 text-justify mb-20 shadow-xl">
                            <h2 className="text-3xl mb-5 text-black">
                                ⚙️ Montagem física do totem:
                            </h2>
                            <p className="font-bold mt-3">
                                Ações tomadas:
                            </p>
                            <ul className="list-disc pl-7">
                                <li className="mt-1">Criação e organização do orçamento;</li>
                                <li className="mt-1">Definição de medidas;</li>
                                <li className="mt-1">Modelagem no SolidWorks;</li>
                                <li className="mt-1">Detalhamento no SolidWorks;</li>
                                <li className="mt-1">Planejamento para dar início a montagem.</li>
                            </ul>
                            <Carrossel
                                imagens={totem}
                            />
                        </div>
                        <div className="border border-gray-500 w-[95%] rounded-md p-10 text-gray-500 text-justify mb-20 shadow-xl">
                            <h2 className="text-3xl mb-5 text-black">
                                🖥️ Desenvolvimento da interface:
                            </h2>
                            <p className="font-bold mt-3">
                                Ações tomadas:
                            </p>
                            <ul className="list-disc pl-7">
                                <li className="mt-1">Atualização e integração do projeto Front-End do Assistente Virtual;</li>
                                <li className="mt-1">Identidade visual com avatar, logo e arte;</li>
                                <li className="mt-1">Renderização de arquivos 3D (Mapa e Avatar).</li>
                            </ul>
                            <Carrossel
                                imagens={visual}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}