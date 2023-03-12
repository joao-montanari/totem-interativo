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
                <SlideBar/>
                    <div className='pt-12 pl-10 w-[90%]'>
                        <h1 className='text-5xl mb-8'>
                            2º Sprint
                        </h1>
                        <h2 className="text-3xl mb-3">
                            Metas Definidas:
                        </h2>
                        <ul className="list-disc pl-8">
                            <li>Reserva de salas;</li>
                            <li>Mapa da planta;</li>
                            <li>Registro de projetos;</li>
                            <li>Desenvolvimento da interface.</li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}