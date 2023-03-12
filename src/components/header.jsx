import Image from "next/image"

export default function Header() {
    return(
        <div className="w-full h-20 border border-l-gray-100 shadow-md flex items-center">
            <div className="w-1/2">
                <Image
                    className="w-48 h-16 ml-5"
                    src={'/image/logoAvilla.png'}
                    width={200}
                    height={100}
                    alt='Logo Avilla'
                />
            </div>
            <div className="w-1/2">
                <ul className="float-right mr-5">
                    <li className="text-lg cursor-pointer hover:bg-sky-600 duration-300 hover:p-1 hover:text-white hover:rounded-lg">
                        Home
                    </li>
                </ul>
            </div>
        </div>
    )
}