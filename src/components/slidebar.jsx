import React from "react"
import Image from "next/image"
import Link from "next/link";
import { useState } from "react"

export default function SlideBar() {
    const [open, setOpen] = useState(false);
    const Menu = [
        { title: '1º Sprint', img: 'peca', src: 'sprintum' },
        { title: '2º Sprint', img: 'engrenagem', src: 'sprintdois'},
        { title: '3º Sprint', img: 'entrega', src: 'sprinttres' },
        { title: 'Developers', img: 'developers', gap: true },
        { title: 'Daniel Dante', img: 'daniel_dante', src: 'danielDante' },
        { title: 'Giovanna Freitas', img: 'giovanna_freitas', src: 'giovannaFreitas' },
        { title: 'João Montanari', img: 'joao_montanari', src: 'joaoMontanari' },
        { title: 'Maitê Favaro', img: 'user', src: 'maiteFavaro' },
        { title: 'Naiury Chaves', img: 'user', src: 'naiuryChaves' },
    ]

    return (
        <div className= {`${open ? "w-72" : "w-20"} duration-300 h-screen shadow-2xl bg-[#1143c2] relative p-3 pt-7`}>
            <Image
                src={'/image/slideBar.png'}
                width={50}
                height={50}
                alt='Button SlideBar'
                className={`absolute w-8 cursor-pointer -right-4 top-16 border-2 border-[#1143c2] rounded-full p-1 bg-white duration-500 ${!open && 'rotate-180'}`}
                onClick={() => setOpen(!open)}
            />
            <div className="flex gap-x-4 items-center">
                <Image
                    src={'/image/logo.png'}
                    width={50}
                    height={50}
                    alt='logo'
                    className={`cursor-pointer duration-500 ${!open && 'rotate-180'}`}
                />
                <h1 className={`text-white origin-left font-medium text-4xl duration-300 ${!open && 'scale-0'}`}>
                    Avilla
                </h1>
            </div>
            <ul>
                {
                    Menu.map((aba, index)=>(
                        <Link href={`/${aba.src}`} key={index} className={`p-1 text-gray-200 flex items-center gap-x-4 rounded-md duration-300 ${aba.gap ? "mt-9 text-xl font-bold" : "text-base mt-2 hover:bg-[#0d4ae3d0] cursor-pointer"} ${index === 0 && 'mt-7'}`}>
                            <Image
                                src={`/image/${aba.img}.png`}
                                width={35}
                                height={35}
                                alt={aba.title}
                                className="rounded-full"
                            />
                            <span className={`${!open && 'hidden'} origin-left duration-300`}>
                                {aba.title}
                            </span>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}