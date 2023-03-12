import Image from "next/image"
import Head from "next/head"

import SlideBar from "@/components/slidebar"

export default function danielDante() {
    return(
        <>
            <Head>
                <title>Daniel Dante</title>
                <link rel="icon" href="/image/logo.png" />
            </Head>
            <div className="w-full h-2">
                <Image
                    width={100}
                    height={100}
                    alt="faixa Bosch"
                    className="h-full w-full object-cover"
                    src="/image/bosch_faixa.svg"
                />
            </div>
            <div className="flex">
                <div className='top-0 left-0 fixed'>
                    <SlideBar/>
                </div>
                <div className="pt-12 pl-80 w-full">
                    <div className="flex items-center">
                        <Image
                            src={'/image/daniel_dante.png'}
                            width={100}
                            height={50}
                            alt='Daniel Dante'
                            className="rounded-full border-4 border-[#1143c2]"
                        />
                        <ul className="ml-8">
                            <li className="text-4xl font-bold mb-3">
                                Daniel Dante
                            </li>
                            <li className="text-3xl text-gray-500 mb-3">
                                Idade: 20 anos
                            </li>
                            <li className="flex">
                                <a href="https://github.com/DanielDante15" target={"_blank"} className="mr-4">
                                    <Image
                                        src={'/image/brand-github.svg'}
                                        width={45}
                                        height={60}
                                        alt='github'
                                        className="duration-500 rounded-full bg-gray-200 p-1 hover:bg-gray-300"
                                    />
                                </a>
                                <a href="https://github.com/DanielDante15" target={"_blank"}>
                                    <Image
                                        src={'/image/brand-linkedin.svg'}
                                        width={45}
                                        height={60}
                                        alt='linkedin'
                                        className="duration-500 rounded-full bg-gray-200 p-1 hover:bg-gray-300"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}