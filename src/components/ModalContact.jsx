import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useRouter } from 'next/router';
import en from '@/locale/en';
import fr from '@/locale/fr';

export default function MyModal({isOpen, setIsOpen}) {
  const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : fr;

  
    return (
      <>
  
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
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
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-black"
                    >
                      {t.modalMessage1}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-black">
                      {t.modalMessage2}
                      </p>
                    </div>
  
                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-blue bg-white px-4 py-2 text-sm font-medium text-blue hover:bg-blue hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {t.modalButton}
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    )
  }