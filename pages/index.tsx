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
    <div className="container mx-auto">
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20  ">
        <p className="mt-3 mb-10 p-10 rounded text-center text-lg">
          List of recommended providers for newbies/hobbyists.
          want to be added? Open pull request on GitHub
        </p>

        <ProviderTable />
      </main>

      <Footer />
    </div>

  )
}
