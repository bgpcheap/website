import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Head from 'next/head'


const Footer = () => {


    return (
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://pdxnet.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/paradox.svg" alt="Paradox Logo" className="h-4 ml-2" />
        </a>
      </footer>
    )
}
export default Footer;
