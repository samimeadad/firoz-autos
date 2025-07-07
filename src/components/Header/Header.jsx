import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../../assets/logo.png';


const navigation = [
    { name: 'Home', href: '/firoz-autos/home', current: false },
    { name: 'Products', href: '/firoz-autos/products', current: false },
    { name: 'Service & Spare Parts', href: '/firoz-autos/service', current: false },
    { name: 'About Us', href: '/firoz-autos/about', current: false },
    { name: 'Road Safety', href: '/firoz-autos/roadSafety', current: false },
    { name: 'Contact Us', href: '/firoz-autos/contact', current: false },
    { name: 'Events', href: '/firoz-autos/events', current: false },
    { name: 'Honda Global', href: 'https://global.honda/en/', current: false, target: '_blank' }
]

function classNames ( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

export default function Header () {
    return (
        <Disclosure as="nav" className="bg-green-600">
            { ( { open } ) => (
                <>
                    <header className="container mx-auto max-w-8xl">
                        <div className="relative flex h-36 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden md:hidden">
                                {/* Mobile menu button*/ }
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-green-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    { open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    ) }
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="mt-2 ms-8 flex flex-shrink-0 items-center sm:place-items-center">
                                    <a href="/firoz-autos/">
                                        <img
                                            className="h-8 w-auto"
                                            src={ logo }
                                            alt="Firoz Autos Logo"
                                        />
                                    </a>
                                </div>
                                <div className="hidden mt-2 sm:ml-6 sm:block sm:text-sm md:ml-6 md:block md:text-sm">
                                    <div className="flex space-x-4">
                                        { navigation.map( ( item ) => (
                                            <a
                                                key={ item.name }
                                                href={ item.href }
                                                // rel="noreferrer"
                                                // target='_blank'
                                                className={
                                                    classNames(
                                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'rounded-md px-3 py-2 text-xl font-medium'
                                                    ) }
                                                aria-current={ item.current ? 'page' : undefined }
                                            >
                                                { item.name }
                                            </a>
                                        ) ) }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    <Disclosure.Panel className="sm:hidden md:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            { navigation.map( ( item ) => (
                                <Disclosure.Button
                                    key={ item.name }
                                    as="a"
                                    href={ item.href }
                                    className={ classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    ) }
                                    aria-current={ item.current ? 'page' : undefined }
                                >
                                    { item.name }
                                </Disclosure.Button>
                            ) ) }
                        </div>
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure >
    )
}
