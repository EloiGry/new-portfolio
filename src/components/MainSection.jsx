import Image from 'next/image'
import Container from './Container'
import { useRouter } from 'next/router';
import en from '@/locales/en';
import fr from '@/locales/fr';


export default function MainSection() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : fr;
    return (
        <Container>
            <div id='top' className='text-center py-4 md:py-6 h-[calc(100vh-70px)] flex flex-col lg:flex-row items-center justify-around'>
                <div>
                    <h1 className='text-xl font-TitleFont md:text-4xl'> {t.mainTitle} 👋</h1>
                    <ul className='my-10 md:my-20 font-TitleFont md:text-2xl'>
                        <li> {t.mainList1} </li>
                        <li> {t.mainList2} </li>
                        <li> {t.mainList3} </li>
                    </ul>
                    <p className='text-lg md:text-2xl'> {t.mainP}</p>
                </div>
                <Image src='MainImage.svg' height={400} width={400} />

            </div>
        </Container>
    )

}