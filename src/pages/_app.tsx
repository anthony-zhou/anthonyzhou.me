import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
// import { Righteous } from 'next/font/google';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

// const righteous = Righteous({
//   subsets: ['latin'],
//   weight: '400',
//   variable: '--font-righteous',
// });

// const merriweather = Merriweather({
//   subsets: ['latin'],
//   weight: '400',
//   variable: '--font-merriweather',
// });

// const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <style jsx global>
        {`
        :root {
          {/* background-color: #FCFCFA; */}
          font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
          {/* font-family: 'Helvetica Neue', Helvetica, Arial, ui-sans-serif, sans-serif; */}
          {/* font-family: 'Merriweather'; */}
        }
        `}

      </style>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </main>
  );
}
