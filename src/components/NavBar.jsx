import { useState } from 'react';
import { RiMenuAddLine } from 'react-icons/ri'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import Container from './Container';
import Link from 'next/link';
import { motion } from "framer-motion"
import { useRouter } from 'next/router';
import en from '@/locales/en';
import fr from '@/locales/fr';
import { Tab } from '@headlessui/react';

export default function NavBar() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : fr;


    const pathVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: 5,
                type: "tween"
            }
        }
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }


    const changeLanguage = (e) => {
        const locale = e.target.value
        router.push(router.pathname, router.asPath, { locale });
    };

    const changeLanguageMobile = (l) => {
        const locale = l
        router.push(router.pathname, router.asPath, { locale });
    }


    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const variants = {
        open: {
            opacity: 1, x: 0, transition: {
                type: "tween",
                duration: 0.5
            }
        },
        closed: {
            opacity: 1, x: "-90%",
            transition: {
                type: "tween",
                duration: 0.5
            }
        },

    }

    return (
        <div className='sticky top-0 z-50 bg-blue'>
            <Container>

                <motion.div className='flex items-center justify-between h-[70px] md:hidden' animate={!isMenuOpen ? "open" : "closed"}
                    variants={variants}>
                    <motion.svg className='framerLogo' initial='hidden' animate='visible' fill="none" width="50px" height="50px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><motion.path variants={pathVariants} d="M 5 6 L 5 19.5625 L 2.71875 21.876953 C 2.26575 22.328953 2 22.95275 2 23.59375 C 2 24.91375 3.08625 26 4.40625 26 L 27.59375 26 C 28.91375 26 30 24.91375 30 23.59375 C 30 22.95275 29.73425 22.328 29.28125 21.875 L 27 19.5625 L 27 6 L 5 6 z M 7 8 L 25 8 L 25 19 L 7 19 L 7 8 z M 16 9 L 14.5 18 L 16 18 L 17.5 9 L 16 9 z M 12.085938 11 L 10.367188 13.068359 L 10 13.5 L 10.367188 13.931641 L 12.085938 16 L 13.171875 15.136719 L 11.810547 13.5 L 13.171875 11.863281 L 12.085938 11 z M 19.914062 11 L 18.828125 11.863281 L 20.189453 13.5 L 18.828125 15.136719 L 19.914062 16 L 21.632812 13.931641 L 22 13.5 L 21.632812 13.068359 L 19.914062 11 z M 6.4375 21 L 25.5625 21 L 27.875 23.28125 C 27.953 23.35925 28 23.48375 28 23.59375 C 28 23.83575 27.83575 24 27.59375 24 L 4.40625 24 C 4.16425 24 4 23.83575 4 23.59375 C 4 23.48475 4.047 23.36025 4.125 23.28125 L 6.4375 21 z" /></motion.svg>
                    {/* <FaLaptopCode size='3rem' className='text-white'/> */}
                    {!isMenuOpen ? (<button onClick={() => setIsMenuOpen(true)}><RiMenuAddLine size='2.5rem' className='text-white hover:text-orange duration-300' /></button>) : (
                        <button onClick={() => setIsMenuOpen(false)}><IoIosCloseCircleOutline size='2.5rem' className='text-white hover:text-orange duration-300' /></button>
                    )}
                </motion.div>
                <div className='md:flex items-center justify-between h-[70px] hidden'>
                    <motion.svg className='framerLogo' initial='hidden' animate='visible' fill="none" width="50px" height="50px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><motion.path variants={pathVariants} d="M 5 6 L 5 19.5625 L 2.71875 21.876953 C 2.26575 22.328953 2 22.95275 2 23.59375 C 2 24.91375 3.08625 26 4.40625 26 L 27.59375 26 C 28.91375 26 30 24.91375 30 23.59375 C 30 22.95275 29.73425 22.328 29.28125 21.875 L 27 19.5625 L 27 6 L 5 6 z M 7 8 L 25 8 L 25 19 L 7 19 L 7 8 z M 16 9 L 14.5 18 L 16 18 L 17.5 9 L 16 9 z M 12.085938 11 L 10.367188 13.068359 L 10 13.5 L 10.367188 13.931641 L 12.085938 16 L 13.171875 15.136719 L 11.810547 13.5 L 13.171875 11.863281 L 12.085938 11 z M 19.914062 11 L 18.828125 11.863281 L 20.189453 13.5 L 18.828125 15.136719 L 19.914062 16 L 21.632812 13.931641 L 22 13.5 L 21.632812 13.068359 L 19.914062 11 z M 6.4375 21 L 25.5625 21 L 27.875 23.28125 C 27.953 23.35925 28 23.48375 28 23.59375 C 28 23.83575 27.83575 24 27.59375 24 L 4.40625 24 C 4.16425 24 4 23.83575 4 23.59375 C 4 23.48475 4.047 23.36025 4.125 23.28125 L 6.4375 21 z" /></motion.svg>
                    {/* <FaLaptopCode size='3rem' className='text-white'/> */}
                    <div className='text-white'>
                        <Link href='#services' className='pr-2 lg:pr-4 hover:text-orange duration-300'> {t.navItem1}</Link>
                        <Link href='#references' className='px-2 lg:px-4 hover:text-orange duration-300'> {t.navItem2} </Link>
                        <Link href='#contact' className='px-2 lg:px-4 hover:text-orange duration-300'> {t.navItem3} </Link>
                        <select
                            onChange={changeLanguage}
                            value={locale}
                            className="text-white bg-transparent tracking-wide pl-2 lg:pl-4 flag hover:text-orange border-none cursor-pointer outline-none"
                        >
                            <option className="text-black flex cursor-pointer flag" value="en">  EN - 🇬🇧 </option>
                            <option className="text-black flex cursor-pointer flag" value="fr"> FR - 🇫🇷 </option>
                        </select>
                    </div>
                </div>
            </Container>
            {isMenuOpen &&
                <div className='bg-blue text-white z-10 absolute top-[65px] w-full divide-y divide-white flex flex-col border-b border-b-white md:hidden'>
                    <Link href='#services' className='p-8 border-t border-t-white hover:text-orange duration-300'> {t.navItem1} </Link>
                    <Link href='#references' className='p-8 hover:text-orange duration-300'> {t.navItem2} </Link>
                    <Link href='#contact' className='p-8 hover:text-orange duration-300'> {t.navItem3} </Link>
                    <Tab.Group>
                        <Tab.List className="p-8 flex justify-between">
                            <Tab onClick={() => changeLanguageMobile('en')} className={() => classNames("flag text-white hover:text-orange duration-300", locale === 'en' && 'border-b-4 border-orange')}>
                                UK - 🇬🇧
                            </Tab>
                            <Tab onClick={() => changeLanguageMobile('fr')} className={() => classNames("flag text-white hover:text-orange duration-300", locale === 'fr' && 'border-b-4 border-orange')}>
                                FR - 🇫🇷
                            </Tab>
                        </Tab.List>
                    </Tab.Group>
                </div>
            }
        </div>
    );
};

