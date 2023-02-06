import Container from "./Container";
import Image from "next/image";

import token from "@/assets/token_dani.png"
import vino from "@/assets/vino_Dani.png"
import comida from "@/assets/comida_dani.png"


import Link from "next/link";
import en from '@/locales/en';
import fr from '@/locales/fr';
import { useRouter } from "next/router";

export default function ReferencesSection() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : fr;
    const data = [{ img: token, link: "https://tokenfit.io/en/tokenfit-home-english/" }, { img: vino, link: "https://285kelvin.com/" }, { img: comida, link: "https://next-js-blog-sanity-self.vercel.app/" }]
    return (
        <div id='references' className="bg-[url('../../public/BlobD.svg')] bg-no-repeat bg-cover bg-bottom md:bg-bottom pb-6 md:pb-12 lg:pb-20">
            <Container>
                <h2 className="font-TitleFont text-xl py-6 text-white shadowText"> {t.referencesTitle} </h2>
                <div className="flex flex-col justify-center items-center lg:flex-row lg:flex-wrap lg:items-stretch">
                    {data.map((element, index) => {
                        return (
                            <Link key={element.link} href={element.link} target='_blank' className="lg:w-1/4 h-auto shadow-xl rounded-xl hover:scale-105 ease-out duration-700 my-6 md:mx-8">
                                <Image src={element.img} placeholder='blur' height='auto' className='rounded-xl' />
                            </Link>
                        )
                    })}

                </div>
            </Container>

        </div>
    )
}