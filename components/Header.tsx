import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Head from 'next/head'
import React from "react";


const Header = () => {
    const { pathname } = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    const menuItems = [
        { name: 'Home', link: '/' },
        { name: 'Policy', link: '/policy' },
        { name: 'GitHub', link: 'https://github.com/bgpcheap/website' },

    ]

    return (
        <>
            <Head>
                <title>{`${menuItems.filter((x => x.link == pathname))[0].name || ''} - bgp.cheap`}</title>
                <meta property="og:title" content="bgp.cheap" />
                <meta property="twitter:title" content="bgp.cheap" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <nav className="flex flex-col max-w-screen-xl px-8 mx-auto">

                <div className="flex flex-row items-center justify-between w-full mt-10">
                    <Link href="/" className="flex items-center text-xl">
                        <img src={`/img/icon.svg`} className='h-8 w-8 mr-2' />

                        BGP.cheap
                    </Link>
                    <button data-collapse-toggle="navbar-default" onClick={toggle} type="button" className="inline-flex items-center p-2 w-10 h-10 mr-2 justify-center text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    </button>

                    <div className="hidden sm:flex flex-row gap-6">
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.link}
                                className={`${pathname == item.link ? 'text-blue-500 hover:text-blue-400' : ''} hover:text-blue-500 transition-all duration-200 font-medium`}
                            >
                                {item.name}
                            </Link>
                        ))}

                    </div>
                </div>
                <div className="sm:hidden block">
                    <div
                        style={{
                            transition: 'grid-template-rows 0.3s ease-out',
                            display: 'grid',
                            gridTemplateRows: isOpen ? '1fr' : '0fr'
                        }}
                    >
                        <div className="overflow-hidden w-full mt-2">
                            <div className="bg-zinc-50 flex flex-col p-3 gap-1 rounded-lg border border-gray-200">
                                {menuItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.link}
                                        onClick={() => {
                                            setIsOpen(false);
                                        }}
                                        className={`${pathname == item.link ? 'bg-white text-black' : 'text-black'} transition-all duration-200 font-medium px-3 py-2.5 rounded-lg`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </nav>
        </>
    )
}
export default Header;
