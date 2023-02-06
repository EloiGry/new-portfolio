import MainSection from '@/components/MainSection'
import NavBar from '@/components/NavBar'
import ServicesSection from '@/components/ServicesSection'
import Head from 'next/head'
import ContactSection from "@/components/ContactSection"
import ReferencesSection from '@/components/ReferencesSection'
import EntryEffect from '@/components/EntryEffect'


export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio web developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" />
      </Head>
        <main className='scroll-smooth max-h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-blue'>
          <NavBar/>
          <EntryEffect>
            <MainSection/>
          </EntryEffect>
            <ServicesSection/>
          <EntryEffect>
            <ReferencesSection/>
          </EntryEffect>
          <EntryEffect>
          <ContactSection/>
          </EntryEffect>
        </main>
    </>
  )
}

