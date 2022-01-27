import { Disclosure } from '@headlessui/react'
import Link from 'next/link'

export default function Navbar() {
    const navigate = [
        {
            name: 'Home',
            url: '/',
            current: '/',
        },
        {
            name: 'Projects',
            url: '/projects',
            current: '/projects',
        },
    ]

    return (
        <Disclosure
            as='nav'
            id='navboxshadow'
            className='bg-zinc-800 sticky top-0 opacity-90 backdrop-blur-xl transition-shadow ease-in-out duration-400 z-10'
        >
            {({ open }) => (
                <>
                    <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                        <div className='relative flex items-center justify-between h-16'>
                            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                                    <span className='sr-only'>Open main menu</span>
                                    {open ? (
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='h-6 w-6'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='h-6 w-6'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                        >
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 8h16M4 16h16' />
                                        </svg>
                                    )}
                                </Disclosure.Button>
                            </div>

                            <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                                <div className='hidden sm:block sm:ml-6'>
                                    <div className='flex space-x-4'>
                                        {navigate.map((page, idx) => (
                                            <Link href={page.url} key={idx} passHref>
                                                <button
                                                    key={page.name}
                                                    className={
                                                        'px-3 py-2 rounded-md text-sm font-bold tracking-widest ' +
                                                        (page.name == 'Home'
                                                            ? 'bg-lime-400 text-white hover:bg-cyan-500 '
                                                            : 'hover:bg-zinc-700 text-white')
                                                    }
                                                    aria-current={page.current ? 'page' : undefined}
                                                >
                                                    {page.name}
                                                </button>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='absolute right-0 flex text-white'>
								<div className='flex hidden md:block hover:text-cyan-500'>
									<a href='https://twitter.com/brunurn72' rel='noreferrer' className='text-2xl'>
										<i className='bi bi-twitter'></i>
                                    </a>
								</div>
								<div className='flex hidden ml-10 md:block hover:text-cyan-500'>
									<a href='https://github.com/Brr1-99' rel='noreferrer' className='text-2xl'>
										<i className='bi bi-github'></i>
                                    </a>
								</div>
								<div className='flex hidden ml-10 md:block hover:text-cyan-500'>
									<a href='https://www.linkedin.com/in/bruno-rodríguez-novo-948270182/' rel='noreferrer' className='text-2xl'>
										<i className='bi bi-linkedin'></i>
                                    </a>
								</div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className='sm:hidden'>
                        <div className='px-2 pt-2 pb-3 space-y-1'>
                            {navigate.map((page, idx) => (
                                <Link href={page.url} key={idx} passHref>
                                    <button
                                        key={page.name}
                                        className={
                                            'block px-3 py-2 rounded-md text-sm font-bold tracking-widest ' +
                                            (page.name == 'Home'
                                                ? 'bg-lime-400 text-white hover:bg-cyan-500'
                                                : 'hover:bg-zinc-700 text-white')
                                        }
                                        aria-current={page.current ? 'page' : undefined}
                                    >
                                        {page.name}
                                    </button>
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
