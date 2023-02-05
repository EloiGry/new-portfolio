import Container from "./Container";
import Image from 'next/image'
import en from '@/locale/en';
import fr from '@/locale/fr';
import { useRouter } from "next/router";
import EntryEffect from "./EntryEffect";



export default function ServicesSection() {

    const router = useRouter();

    const { locale } = router;
    const t = locale === 'en' ? en : fr;


    return (
        <div id='services' className="bg-[url('../../public/Blob5.svg')] pb-6" >
            <Container>
                <h2 className="font-TitleFont text-xl py-6"> Services </h2>
            <EntryEffect>
                <div className='flex flex-col lg:flex-row lg:flex-wrap justify-center lg:justify-center lg:gap-8 items-stretch'>
                {t.servicesData.map(element => {
                    return (
                        <div key={element.title} className="lg:w-5/12 xl:w-[30%] md:mx-28 lg:mx-0 text-center bg-white shadow-2xl rounded-2xl my-8 p-6 flex flex-col justify-start items-center"> 
                        {Array.isArray(element.img) ? (<div className='flex lg:flex-wrap justify-around items-center lg:h-1/3 px-2 my-2 md:my-4 md:px-4 lg:px-0 lg:pb-[25px] xl:pb-[40px]'> {element.img.map(e => {
                            return (
                                    <Image key={e}  src={e} width={75} height={75} alt={e} />
                            )
                        })} </div>) : (<Image src={element.img} width={100} height={100} alt={element.title} className='lg:h-1/3 m-2 md:my-4'/>)}
                        <div>
                        <h3 className='font-semibold text-xl text-center m-2'> {element.title}</h3>
                        {Array.isArray(element.text) ? (<ul> {element.text.map((i,index) => {
                            return (
                                        <li key={index}> <b>{i.title}</b> : {i.techno}</li>
                            )
                        })} </ul>) : (<p> {element.text} </p>)}
                        </div> 
                    </div>
                    )
                })}
            </div>
        </EntryEffect>
            </Container>
        </div>

    )
}