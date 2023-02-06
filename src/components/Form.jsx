import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import ModalContact from "./ModalContact"
import { useRouter } from 'next/router';
import en from '@/locales/en';
import fr from '@/locales/fr';



const Form = ({ setForm, form }) => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : fr;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false)





    const handleSubmit = e => {
        e.preventDefault();
        e.target.reset();
        const data = {
            name,
            email,
            message,
        };
        fetch('/api/contact', {
            method: 'post',
            body: JSON.stringify(data),
        });
        if (data) {
            setIsOpen(true);
            setForm(false)
        }
    };
    return (
        <>
            {isOpen ? (
                <ModalContact setIsOpen={setIsOpen} isOpen={isOpen} />) :
                (
                    <Transition appear show={form} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={() => setForm(false)}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black bg-opacity-25" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >

                                        <Dialog.Panel className="w-10/12 sm:w-8/12 md:w-1/2 lg:w-1/3 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                            <div className='flex'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 mr-8">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                                </svg>
                                                <p> eloipro.dev@gmail.com </p>
                                            </div>
                                            <div class="relative flex py-5 items-center">
                                                <div class="flex-grow border-t border-gray-400"></div>
                                                <span class="flex-shrink mx-4 text-gray-400">{t.spanForm}</span>
                                                <div class="flex-grow border-t border-gray-400"></div>
                                            </div>
                                            <form onSubmit={handleSubmit}>
                                                <div className="flex flex-col ml-2">
                                                    <label htmlFor="name">{t.formName} </label>
                                                    <input
                                                        id="name"
                                                        type="text"
                                                        onChange={e => setName(e.target.value)}
                                                        className="bg-grey border border-blue text-black text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-2.5"
                                                        placeholder="Nom"
                                                    />
                                                </div>
                                                <div className="flex flex-col ml-2">
                                                    <label htmlFor="email">{t.formEmail} </label>
                                                    <input
                                                        id="email"
                                                        type="email"
                                                        onChange={e => setEmail(e.target.value)}
                                                        className="bg-grey border border-blue text-black text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-2.5"
                                                        placeholder="Email"
                                                    />
                                                </div>
                                                <div className="flex flex-col ml-2">
                                                    <label htmlFor="message">{t.formMessage} </label>
                                                    <textarea
                                                        id="message"
                                                        type="text"
                                                        rows="5"
                                                        onChange={e => setMessage(e.target.value)}
                                                        className="bg-grey border border-blue text-black text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-2.5"
                                                        placeholder="Message"
                                                    />
                                                </div>
                                                <button type="submit" className='border border-blue ml-2 inline-flex justify-center rounded-md px-4 py-2 text-sm font-medium text-blue mt-2 hover:bg-blue hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2'> {t.formButton} </button>
                                            </form>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                )}

        </>
    );
};

export default Form;