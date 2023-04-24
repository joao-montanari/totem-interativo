import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function Carrossel({ imagens }) {
    const [curr, setCurr] = useState(0);

    const prev = () => (
        setCurr((curr) => (curr === 0 ? imagens.length - 1 : curr - 1))
    )

    const next = () => (
        setCurr((curr) => (curr === imagens.length - 1 ? 0 : curr + 1))
    )

    return (
        <>
            <div className='flex max-w-xl mt-5 m-auto'>
                <button 
                    onClick={prev}
                    className='rounded-full hover:bg-slate-100 duration-300'
                >
                    <IoIosArrowBack size={50}/>
                </button>
                <div className='overflow-hidden relative w-96 m-auto'>
                    <div 
                        style={{ transform: `translateX( -${curr * 100}% )` }}
                        className='flex transition-transform ease-out duration-500'
                    >
                        {
                            imagens.map((image) => (
                                <Image src={image} alt="Imagens" className='w-96 rounded-lg shadow-lg' width={300} height={200} />
                            ))
                        }
                    </div>
                </div>
                <button 
                    onClick={next}
                    className='rounded-full hover:bg-slate-100 duration-300'
                >
                    <IoIosArrowForward size={50}/>
                </button>
            </div>
            <div className='h-10 p-2'>
                <div className='flex items-center justify-center gap-2'>
                    {
                        imagens.map((item, i) => (
                            <div className={`transition-all w-3 h-3 bg-gray-400 rounded-full ${curr === i ? "p-3" : "bg-opacity-50"}`}>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}