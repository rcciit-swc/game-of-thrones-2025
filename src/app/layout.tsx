import type { Metadata } from 'next';
import './globals.css';
import { Footer, Navbar } from '@/components/common';
import { constructMetaData } from '@/utils/functions/metadata';
import SessionProvider from '@/components/SessionProvider';

export const metadata: Metadata = constructMetaData({
  title: 'Game Of Thrones 2025',
  description: 'The Official Sports Fest of RCCIIT.',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <SessionProvider />
        <Footer />
      </body>
    </html>
  );
}
