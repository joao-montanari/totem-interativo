import Image from "next/image"

import SlideBar from "@/components/slidebar"

export default function giovannaFreitas() {
    return(
        <div>
            <div className="w-full h-2">
                <Image
                    width={100}
                    height={100}
                    alt="faixa Bosch"
                    className="h-full w-full object-cover"
                    src="/image/bosch_faixa.svg"
                />
            </div>
            <SlideBar/>
        </div>
    )
}