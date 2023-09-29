'use client';

import Image from 'next/image'
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Header from "../components/Header";
import ProviderTable from "../components/ProvidersTable"
import Footer from '@/components/Footer';

export default function Home() {

  return (
    <>
      <Header />
      <div className="max-w-screen-xl px-8 mx-auto">
        <main>
          <p className="text-gray-800 mt-3 mb-2 py-10 rounded text-center md:text-lg">
            List of recommended providers for newbies/hobbyists.
            Want to be added? Open pull request on GitHub.
          </p>
          <ProviderTable />
        </main>
        <Footer />
      </div>
    </>
  )
}
