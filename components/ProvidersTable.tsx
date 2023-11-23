import React, { useState } from 'react';
import ProviderData from "../components/Providers"
import RPKIPopover from './RPKIPopover';
import Link from 'next/link';
import IRRPopover from './IRRPopover';
import LOAPopover from './LOAPopover';
import FlagPopover from './FlagPopover';
import SortBy from "sort-by";

const MyTable: React.FC = () => {

    const [query, setQuery] = useState('');

    //Handling the input on our search bar
    const handleChange = (e: any) => {
        setQuery(e.target.value)
    }

    //Handle filtering of the name or country
    const filteredData = ProviderData.filter((data) =>
        data.provider.name.toLowerCase().includes(query.toLowerCase()) || data.locations.join(",").toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>
            <div className="relative overflow-x-auto mb-5 w-full">

                <div className="p-4 bg-zinc-50 md:flex md:flex-row md:justify-end border border-gray-200 rounded-lg">
                    <div className="relative mt-1 items-right">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <input type="search" id="table-search" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full md:w-80 pl-10 p-2.5" placeholder="Search (country, services or name)" />
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 grid-flow-rows w-full gap-3 mb-10">

                {filteredData.sort(SortBy("startPrice")).map((item: any, index: number) => (
                    <div key={index} className='bg-zinc-50 p-4 flex flex-col rounded-lg border border-gray-200'>
                        <div className="grid grid-cols-3">
                            <div className='col-span-1'>
                                <a href={`https://bgp.tools/as/${item.provider.asn}`} target='_blank' className="inline-flex items-center rounded-md bg-blue-50 hover:bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">AS{item.provider.asn}</a>
                            </div>
                            <div className='col-span-2 flex gap-1 justify-end'>
                                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 w-max">Full table</span>
                                <RPKIPopover supported={item.bgpFilters.includes("RPKI")} />
                                <IRRPopover supported={item.bgpFilters.includes("Automatic IRR")} />
                                {item.bgpFilters.includes("LOA Required") && (
                                    <LOAPopover />
                                )}
                            </div>
                        </div>
                        <div className='flex-grow'>
                            <div className="flex items-center text-center py-6">
                                {item.provider.logo_include_text && (
                                    <img className='h-10 max-w-full' src={item.provider.logo} alt={item.provider.name} />
                                )}
                                {!item.provider.logo_include_text && (
                                    <>
                                        <img className='h-10 max-w-full mr-3' src={item.provider.logo} alt={item.provider.name} />
                                        <span className='text-lg'>{item.provider.name}</span>
                                    </>
                                )}
                            </div>
                            <p className="text-xs font-medium uppercase text-gray-500 tracking-wide">Locations</p>
                            <div className="flex flex-wrap gap-2 mt-2 mb-4">

                                {item.locations.length > 0 && item.locations.sort().map((item: any, index: number) => (
                                    <div key={index} className='flex items-center gap-1 text-xs font-medium text-gray-800 bg-white border border-gray-200 rounded-lg p-1.5'>
                                        <img src={`/img/flags/${item.toLowerCase().split(", ")[1]}.svg`} className='h- w-4 flex-shrink-0' />

                                        <span>{item.split(", ")[0]}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs font-medium uppercase text-gray-500 tracking-wide">Services</p>
                            <div className="flex gap-3 flex-wrap mt-2 mb-4">
                                {item.services.sort().map((item: any, index: number) => (
                                    <span key={index} className="text-xs font-medium text-gray-800 bg-white border border-gray-200 rounded-lg p-1.5">{item}</span>
                                ))}
                            </div>
                            <p className="text-xs font-medium uppercase text-gray-500 tracking-wide">Features</p>
                            <div className="flex gap-3 flex-wrap mt-2 mb-4">
                                {item.bgpFee == "None" && (
                                    <span className="text-xs font-medium text-gray-800 bg-white border border-gray-200 rounded-lg p-1.5">Free BGP</span>
                                )}
                                {item.bgpFeatures.map((item: any, index: number) => (
                                    <span key={index} className="text-xs font-medium text-gray-800 bg-white border border-gray-200 rounded-lg p-1.5">{item}</span>
                                ))}

                            </div>
                            {item.pricing.length > 0 && (<>
                                <p className="text-xs font-medium uppercase text-gray-500 tracking-wide">Pricing</p>
                                <div className="flex gap-3 flex-wrap mt-2 mb-4">
                                    {item.pricing.split('\n').map((str: string, index: number) => <p key={index} className="text-sm text-gray-800">{str}</p>)}
                                </div></>
                            )}
                            {item.notes.length > 0 && (<>
                                <p className="text-xs font-medium uppercase text-gray-500 tracking-wide">Notes</p>
                                <div className="flex gap-3 flex-wrap mt-2 mb-4">
                                    {item.notes.split('\n').map((str: string, index: number) => <p key={index} className="text-sm text-gray-800">{str}</p>)}
                                </div></>
                            )}
                        </div>
                        <div className="h-10">
                            <Link href={item.link} className="text-center block rounded-md bg-blue-50 hover:bg-blue-100 p-2.5 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Visit</Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default MyTable;
