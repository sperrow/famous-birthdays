import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
    title: `Who's More FamousBirthdays.com?`,
    description: 'A game based on famousbirthdays.com, created by the Who? Weekly podcast.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <GoogleTagManager gtmId="GTM-54426C4S" />
            <body className={inter.variable}>
                <Theme accentColor="gray">
                    <ThemeProvider attribute="class">{children}</ThemeProvider>
                </Theme>
            </body>
        </html>
    );
}
