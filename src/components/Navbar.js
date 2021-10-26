import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useAtom } from 'jotai'
import { modalopen } from '../App';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function Navbar(props) {
    const location = useLocation();
    const [modalOpen, setModalOpen] = useAtom(modalopen);


    var navigation = [
        { name: 'Dashboard', href: '/', current: location.pathname === "/" },
        { name: 'My Expenses', href: 'expenses', current: location.pathname === "/expenses" },

    ]

    return (
        <Disclosure as="nav" className="bg-gradient-to-r from-blue-500 to-blue-500">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        className="block lg:hidden h-12 w-auto"
                                        src="/logo.jpg"
                                        alt="Workflow"
                                    />
                                    <img
                                        className="hidden lg:block h-12 w-auto"
                                        src="/logo.jpg"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-blue-800 text-white text-lg' : 'text-gray-200 hover:bg-blue-700 text-lg hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button onClick={() => setModalOpen(true)}
                                    type="button"
                                    className="bg-black p-1 rounded-lg border-1 border-opacity-50 h-12 flex items-center justify-center  text-white hover:text-white hover:bg-blue-800"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                    <span className="hidden lg:block lg:mx-3 md:mx-3 md:block">Add Expense</span>
                                </button>
                            </div>
                        </div>
                    </div>


                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-blue-700 text-white text-lg' : 'text-gray-200 hover:bg-blue-400 text-lg hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
