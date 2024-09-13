import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@radix-ui/themes/styles.css';
import './globals.css';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
    title: 'Who is more famousbirthdays.com?',
    description: 'A game based on famousbirthdays.com, created by the Who? Weekly podcast.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.variable}>
                <Theme accentColor="gray">
                    <ThemeProvider attribute="class">{children}</ThemeProvider>
                </Theme>
            </body>
        </html>
    );
}
