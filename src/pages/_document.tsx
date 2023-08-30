import React from 'react';
import {
  Html, Main, NextScript,
} from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=UA-155734640-1" />
      <Script id="google-analytics">
        {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
  
           gtag('config', 'UA-155734640-1');
         `}
      </Script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
