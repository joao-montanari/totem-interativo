import Head from "next/head"
import Image from "next/image"

import SlideBar from "@/components/slidebar"

export default function sprintDois() {
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
                        <SlideBar/>
                    </div>
                    <div className='pt-12 pl-80 w-full'>
                        <h1 className='text-5xl mb-8'>
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
                    </div>
                </div>
            </main>
        </>
    )
}