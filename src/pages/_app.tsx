import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
// import { Righteous } from 'next/font/google';

// const righteous = Righteous({
//   subsets: ['latin'],
//   weight: '400',
//   variable: '--font-righteous',
// });

// const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <style jsx global>
        {`
        :root {
          background-color: #F5F4F0;
          font-family: 'Helvetica Neue', Helvetica, Arial, ui-sans-serif, sans-serif;
        }
        `}

      </style>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </main>
  );
}
