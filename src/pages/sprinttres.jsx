import Head from "next/head"
import Image from "next/image"
import { useState } from "react"

import SlideBar from "@/components/slidebar"

export default function sprintDois() {
    const [aba, setAba] = useState(true);

    return(
        <>
            <Head>
                <title>3º Sprint</title>
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
                        <h1 className='text-5xl mb-8'>
                            3º Sprint
                        </h1>
                        <h2 className="text-3xl mb-3">
                            🏆 Metas Definidas:
                        </h2>
                        <ul className="list-disc pl-8 text-gray-500 mb-8">
                            <li>Interatividade com outras linguas e libras;</li>
                            <li>Desenvolvimento da interface;</li>
                            <li>Montagem da apresentação e do Pitch.</li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}