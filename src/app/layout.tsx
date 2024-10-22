import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactQueryProvider } from './react-query-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title:"G3Nexus"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
        </head>
        <ReactQueryProvider>
            <body className={inter.className}>{children}</body>
        </ReactQueryProvider>
        </html>
    );
}
