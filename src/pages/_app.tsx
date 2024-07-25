import './css/style.css';

import React from 'react';
import { Providers } from '@/providers';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

function MainApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} font-inter antialiased bg-slate-100 text-slate-600`}>
      <React.StrictMode>
        <Providers>
          <Component {...pageProps} />
        </Providers>
      </React.StrictMode>
    </div>
  );
}

export default MainApp;
