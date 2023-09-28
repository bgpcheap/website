import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Head from 'next/head'


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
                <title>{menuItems.filter((x => x.link == pathname))[0].name || ''} - bgp.cheap</title>
                <meta property="og:title" content="bgp.cheap" />
                <meta property="twitter:title" content="bgp.cheap" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <nav className="flex flex-col max-w-screen-xl md:max-w-full container mx-auto">

                <div className="flex flex-row items-center justify-between w-full mt-10">
                    <Link href="/" className="flex items-center text-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>

                        BGP.cheap
                    </Link>
                    <button data-collapse-toggle="navbar-default" onClick={toggle} type="button" className="inline-flex items-center p-2 w-10 h-10 mr-2 justify-center text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
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
                            <div className="bg-zinc-200 flex flex-col p-3  gap-1">
                                {menuItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.link}
                                        onClick={() => {
                                            setIsOpen(false);
                                        }}
                                        className={`${pathname == item.link ? 'bg-white text-black' : 'text-black'} transition-all duration-200 font-medium px-3 py-2.5 rounded-md`}
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
