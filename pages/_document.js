// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="theme-color" content="#1a1a2e" />
        <meta name="description" content="Oraelya AI Oracle – un oracol mistic care îți răspunde la întrebări." />
      </Head>
      <body className="bg-mystic-gradient text-white font-body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
