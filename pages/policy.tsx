'use client';

import Image from 'next/image'
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Header from "../components/Header";
import Footer from '@/components/Footer';

export default function Home() {

  return (
    <>
      <Header />
      <main className="max-w-screen-xl px-8 mx-auto">
        <div className='bg-zinc-50 text-black p-10 md:mt-20 pt-5 mt-20 border border-gray-200 rounded-lg'>
            <h3 id="policy-for-adding-hosting-providers-to-bgp-cheap-directory" className="text-2xl font-semibold mb-4">Policy for Adding Hosting Providers to BGP.Cheap Directory</h3>
            <h4 id="i-purpose" className="text-lg font-semibold mt-4">I. Purpose</h4>
            <p className="mb-4">The purpose of this policy is to outline the criteria for adding hosting providers to the bgp.cheap directory. This policy ensures that the listed providers offer affordable server options with BGP sessions specifically tailored for newcomers and hobbyists.</p>
            <h4 id="ii-criteria-for-hosting-providers" className="text-lg font-semibold">II. Criteria for Hosting Providers</h4>
            <p className="mb-4">To be eligible for listing on the bgp.cheap directory, hosting providers must meet the following criteria:</p>
            <ol className="list-decimal ml-6 mb-4">
                <li className="mb-2"><strong>Affordability:</strong>
                    <ul className="list-disc ml-6">
                        <li>The provider must have a setup fee of under $50.</li>
                        <li>The lowest plan offered by the provider must be $10 or cheaper.</li>
                    </ul>
                </li>
                <li className="mb-2"><strong>BGP Session Availability:</strong>
                    <ul className="list-disc ml-6">
                        <li>The provider must offer BGP sessions.</li>
                    </ul>
                </li>
                <li className="mb-2"><strong>Quality of Service:</strong>
                    <ul className="list-disc ml-6">
                        <li>The provider must have a track record of reliable service, as determined by customer reviews and internal assessment.</li>
                    </ul>
                </li>
                <li className="mb-2"><strong>Customer Support:</strong>
                    <ul className="list-disc ml-6">
                        <li>The provider should offer adequate customer support to assist users in setting up and managing their servers and BGP sessions.</li>
                    </ul>
                </li>
                <li className="mb-2"><strong>Legitimacy:</strong>
                    <ul className="list-disc ml-6">
                        <li>The provider must be a legitimate business entity, complying with the laws and regulations of its operating jurisdiction.</li>
                    </ul>
                </li>
            </ol>
            <h4 id="iv-listing-format" className="text-lg font-semibold">III. Listing Format</h4>
            <p className="mb-4">Providers listed on bgp.cheap will be displayed with the following information:</p>
            <ul className="list-disc ml-6">
                <li className="mb-2"><strong>Provider Name:</strong></li>
                <li className="mb-2"><strong>Plans and Pricing:</strong>
                    <ul className="list-disc ml-6">
                        <li>Including setup fees and monthly costs</li>
                    </ul>
                </li>
                <li className="mb-2"><strong>BGP Session Details:</strong>
                    <ul className="list-disc ml-6">
                        <li>Information on the BGP sessions offered</li>
                    </ul>
                </li>
                <li className="mb-2"><strong>Locations Details:</strong>
                    <ul className="list-disc ml-6">
                        <li>Information on where the services are offered</li>
                    </ul>
                </li>
            </ul>
            <h4 id="v-policy-review" className="text-lg font-semibold">IV. Policy Review</h4>
            <p className="mb-4">This policy will be reviewed annually to ensure it continues to facilitate the directory’s objective of providing a reliable resource for finding affordable hosting providers with BGP sessions. Suggestions for policy modifications can be submitted to the review team for consideration during the annual review.</p>
            <h4 id="vi-contact-information" className="text-lg font-semibold">V. Contact Information</h4>
            <p className="mb-4">For inquiries regarding this policy or listing your hosting provider, please open a issue on <a href="https://github.com/bgpcheap/website/issues/new/choose" className="text-blue-500 hover:underline">GitHub</a>.</p>
            <h4 id="vii-policy-effective-date" className="text-lg font-semibold">VI. Policy Effective Date</h4>
            <p className="mb-4">This policy is effective as of 29/03/2023 (DD/MM/YYYY) and supersedes all previous policies regarding the listing of hosting providers on the bgp.cheap directory.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
