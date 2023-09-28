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
    <div className="container mx-auto">
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-0 md:px-20 md:mb-20 mb-0">


        <div className='bg-zinc-200 rounded text-black p-10 mt-5 md:mt-20 pt-5 mt-20'>
          <h1 className="text-lg mb-6">Our policy</h1>

          <ul className="list-decimal pl-5">
            <li className="mb-4">
              <strong className="text-xl">Pricing:</strong> Affordability is key for beginners and hobbyists.
              <ul className="list-disc pl-5 mt-2">
                <li>Providers must offer at least one plan that is priced below $15 per month. Premium plans can also be available but are not focused for this list.</li>
                <li>The initial setup fee must not exceed $50, making the service accessible.</li>
              </ul>
            </li>

            <li className="mb-4">
              <strong className="text-xl">Support and Documentation:</strong> Assistance and learning materials for users.
              <ul className="list-disc pl-5 mt-2">
                <li>Accessible and responsive customer support to assist users.</li>
                <li>Comprehensive guides and documentation must be available for learning.</li>
              </ul>
            </li>

            <li className="mb-4">
              <strong className="text-xl">Network Performance:</strong> Reliability and efficiency in network service.
              <ul className="list-disc pl-5 mt-2">
                <li>A minimum of 99% uptime should be maintained.</li>
                <li>Stable internet connectivity with diverse peers for redundancy and optimal performance.</li>
              </ul>
            </li>

            <li className="mb-4">
              <strong className="text-xl">Features:</strong> Essential features for a comprehensive service offering.
              <ul className="list-disc pl-5 mt-2">
                <li>BGP sessions should be supported on all plans, including low-cost options.</li>
                <li>Both IPv6 and IPv4 should be supported for a complete, future-oriented service.</li>
              </ul>
            </li>

            <li className="mb-4">
              <strong className="text-xl">Flexibility and Scalability:</strong> Adaptable solutions for varied user needs.
              <ul className="list-disc pl-5 mt-2">
                <li>Providers should offer customization to suit individual user needs.</li>
                <li>Services should be easily scalable as user requirements grow.</li>
              </ul>
            </li>

            <li className="mb-4">
              <strong className="text-xl">Reputation and Reviews:</strong> Providers should have a positive track record and feedback.
              <ul className="list-disc pl-5 mt-2">
                <li>A history of reliable and quality service delivery is mandatory.</li>
                <li>Positive feedback is expected in areas of support, reliability, and performance.</li>
              </ul>
            </li>
          </ul>
        </div>

      </main>

      <Footer />
    </div>

  )
}
