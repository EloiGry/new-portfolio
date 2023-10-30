import Container from "./Container";
import Image from "next/image";

import Token from "@/assets/Token.png"
import Kelvin from "@/assets/Kelvin.png"
import Tikitup from "@/assets/Tikitup.png"
import AaZebre from "@/assets/AaZebre.png"
import BitCapital from "@/assets/Bitcapital.png"
import Gadiamb from "@/assets/Gadiamb.png"
import Gem from "@/assets/Gem.png"
import Ieko from "@/assets/Ieko.png"
import Pharmony from "@/assets/Pharmony.png"



import Link from "next/link";
import en from '@/locales/en';
import fr from '@/locales/fr';
import { useRouter } from "next/router";

export default function ReferencesSection() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : fr;
    const data = [
        { img: Tikitup, link: "https://www.tikitup.net/", alt: "Tikitup Website"}, 
        { img: Kelvin, link: "https://285kelvin.com/", alt: "285Kelvin Website" }, 
        { img: Gem, link: "https://www.gem-formation.com/", alt: "GemFormation Website"}, 
        { img: Gadiamb, link: "https://gadiamb.utile.co/", alt: "Gadiamb Website"}, 
        { img: Pharmony, link: "https://pharmony.fr/", alt: "Pharmony Website"}, 
        { img: AaZebre, link: "https://de-a-a-zebre.fr/", alt: "A à Zèbre Website"}, 
        { img: BitCapital, link: "https://bitcapitals.io/", alt: "BitCapitals Website"}, 
        { img: Ieko, link: "https://ieko.io/", alt: "Ieko Website"}, 
        { img: Token, link: "https://tokenfit.io/en/tokenfit-home-english/", alt: "TokenFit Website" }, 
    ]
    return (
        <div id='references' className="bg-[url('../../public/BlobD.svg')] bg-no-repeat bg-cover bg-bottom md:bg-bottom pb-6 md:pb-12 lg:pb-20">
            <Container>
                <h2 className="font-TitleFont text-xl py-6 text-white shadowText"> {t.referencesTitle} </h2>
                <div className="flex flex-col justify-center items-center lg:flex-row lg:flex-wrap lg:items-stretch">
                    {data.map((element) => {
                        return (
                            <Link key={element.link} href={element.link} target='_blank' className="lg:w-1/4 h-auto shadow-xl rounded-xl hover:scale-105 ease-out duration-700 my-6 md:mx-8">
                                <Image src={element.img} placeholder='blur' height='auto' className='rounded-xl' alt={element.alt}/>
                            </Link>
                        )
                    })}

                </div>
            </Container>

        </div>
    )
}