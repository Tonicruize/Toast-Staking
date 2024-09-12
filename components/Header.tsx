// components/Header.tsx
import React from 'react';
import Head from "next/head";
import Script from "next/script";
import { ConnectEmbed } from "@/app/thirdweb";
import '../public/css/style.css';

const Header: React.FC = () => {
  return (
     <header className="js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors">
     <Head>
        <link rel="stylesheet" href="/css/style.css" /> {/* Ensure correct path */}
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/img/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/img/apple-touch-icon-114x114.png" />
      </Head>
     <div className="flex items-center px-6 py-6 xl:px-24">
        {/* Logo */}
        <a href="index.html" className="shrink-0">
          <img src="/img/logo.png" className="max-h-7 dark:hidden" alt="NFTerra | NFT Marketplace" />
          <img src="/img/logo_white.png" className="hidden max-h-7 dark:block" alt="NFTerra | NFT Marketplace" />
        </a>

        {/* Menu / Actions */}
        <div className="js-mobile-menu invisible lg:visible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 dark:bg-jacarta-800 lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent">
          {/* Mobile Logo / Menu Close */}
          <div className="t-0 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 dark:bg-jacarta-800 lg:hidden">
            {/* Mobile Logo */}
            <a href="index.html" className="shrink-0">
              <img src="/img/logo.png" className="max-h-7 dark:hidden" alt="NFTerra | NFT Marketplace" />
              <img src="/img/logo_white.png" className="hidden max-h-7 dark:block" alt="NFTerra | NFT Marketplace" />
            </a>

            {/* Mobile Menu Close */}
            <button className="js-mobile-close group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent" aria-label="close mobile menu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path>
              </svg>
            </button>
          </div>
          {/* Primary Nav */}
          <nav className="navbar w-full">
            <ul className="flex flex-col lg:flex-row">
              <li className="js-nav-dropdown group relative">
                <a href="index.html" className="flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5">Home</a>
              </li>
              <li className="js-nav-dropdown group relative">
                <a href="collections.html" className="flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5">Collections</a>
              </li>
              <li className="js-nav-dropdown nav-item dropdown group relative">
                <a href="partners.html" className="flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5">Partners</a>
              </li>
              <li className="js-nav-dropdown group relative">
                <a href="blog.html" className="flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5">Blogs</a>
              </li>
              <li className="group">
                <a href="create.html" className="flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5">Create</a>
              </li>
            </ul>
          </nav>

          {/* Mobile Connect Wallet / Socials */}
          <div className="mt-10 w-full lg:hidden">
            <a href="#" className="js-wallet block w-full rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark" data-bs-toggle="modal" data-bs-target="#walletModal">Connect Wallet</a>
            <hr className="my-5 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
            {/* Socials */}
            <div className="flex items-center justify-center space-x-5">
              <a href="#" className="group">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                </svg>
              </a>
              <a href="#" className="group">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.832-46.613 57.668 21.506-2.597 41.956-8.22 60.954-16.972-14.409 21.171-32.508 39.925-53.462 54.833z"></path>
                </svg>
              </a>
              <a href="#" className="group">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M224.1 213.8c-56.26 0-102.6 46.4-102.6 102.6 0 56.26 46.4 102.6 102.6 102.6 56.26 0 102.6-46.4 102.6-102.6 0-56.26-46.4-102.6-102.6-102.6zM224.1 371.4c-81.6 0-148.4-66.8-148.4-148.4 0-81.6 66.8-148.4 148.4-148.4 81.6 0 148.4 66.8 148.4 148.4 0 81.6-66.8 148.4-148.4 148.4zM384 136c0 13.2-10.8 24-24 24s-24-10.8-24-24 10.8-24 24-24 24 10.8 24 24zM224.1 32C101.8 32 0 133.8 0 256s101.8 224 224.1 224c123.4 0 224-101.8 224-224S347.5 32 224.1 32z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Connect Wallet */}
        <a href="#" className="ml-auto hidden rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark lg:block" data-bs-toggle="modal" data-bs-target="#walletModal">Connect Wallet</a>
      </div>
      <Script src="/js/countdown.bundle.js" strategy="lazyOnload" />
      <Script src="/js/app.bundle.js" strategy="lazyOnload" />
      <Script src="/js/darkMode.bundle.js" strategy="lazyOnload" />
    </header>
    
  );
};

export default Header;
