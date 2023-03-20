import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Righteous, Roboto } from 'next/font/google';

const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-righteous',
});

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <style jsx global>
        {`
        :root {
          font-family: ${roboto.style.fontFamily};
          --font-righteous: ${righteous.style.fontFamily};
        }
        `}

      </style>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </main>
  );
}
