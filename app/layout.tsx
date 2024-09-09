import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@radix-ui/themes/styles.css';
import './globals.css';
import { Theme, ThemePanel } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';
import NavMenu from './ui/navMenu';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
    title: 'Who Is More Famous Birthdays Dot Com',
    description: 'Who is more famous birthdays dot com?',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Theme accentColor="gray">
                    {/* <div className="flex items-center justify-center pt-6 pb-8">
                        <div className="fixed w-full min-h-12 flex items-center justify-end px-6 shadow-sm dark:shadow-slate-800 bg-white dark:bg-black">
                            <div className="flex items-center justify-end py-2 px-12">Home</div>
                            <NavMenu />
                        </div>
                    </div> */}
                    {children}
                </Theme>
            </body>
        </html>
    );
}
