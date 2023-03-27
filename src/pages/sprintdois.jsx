import Head from "next/head"
import Image from "next/image"
import { useState } from "react"

import SlideBar from "@/components/slidebar"

export default function sprintDois() {
    const [aba, setAba] = useState(true);

    return(
        <>
            <Head>
                <title>2º Sprint</title>
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
                                Montagem da parte física;
                            </li>
                            <li>
                                <strong>Maitê Favaro: </strong>
                                Montagem da parte física;
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
                                🗺 Mapa da planta:
                            </h2>
                            <strong>Descrição: </strong>
                                É imprescindível que o usuário possa sanar as suas principais dúvidas acerca da empresa Bosch e sua planta. Ademais ele deve apresentar respostas precisas com relação a ETS (Escola técnica de engenharia), setor da Bosch responsável pelos aprendizes. Inclusive, o projeto não deve apenas se limitar a perguntas relacionadas ao universo Bosch, mas como também deve apresentar respostas que envolvem temas didáticos e técnicos tais como eletroeletrônica, mecânica, programação, administração, economia e metodologias de trabalho.
                            <p className="font-bold mt-3">
                                Modo de funcionamento:
                            </p>
                            <ul className="list-disc pl-7">
                                <li className="mt-1">Para que o sistema responda as perguntas, primeiro ele deverá recebê-las por meio de áudio ou texto, o sistema deve procurar a reposta para a mesma e reproduzi-la em áudio e texto;</li>
                                <li className="mt-1">O sistema deve conter um botão com imagem de microfone para que o usuário clique antes de falar a pergunta, ao clicar o usuário já pode falar;</li>
                                <li className="mt-1">Pode ser que o usuário prefira digitar, por isso o sistema deve conter um botão com imagem de teclado ao lado do botão de microfone, para que quando for clicado apareça a caixa de texto onde o usuário poderá digitar com um “escreva aqui sua pergunta” de tom claro escrito na caixa de texto;</li>
                                <li className="mt-1">Assim que o usuário informar a sua pergunta, o sistema deve informar no centro da tela em formato de texto qual a resposta da pergunta, assim como deverá reproduzi-la por meio de áudio. A pergunta permanecerá na tela, só que agora na parte de cima;</li>
                                <li className="mt-1">Caso a pergunta não tenha sido encontrada no banco de perguntas e respostas, o sistema deve retornar “Desculpe, ainda não temos resposta para a sua pergunta! Mas já a enviamos para nosso sistema e estaremos trabalhando em respostas para a mesma”. E cadastrar a pergunta no banco de perguntas para que posteriormente seja analisada pelos manutentores.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}