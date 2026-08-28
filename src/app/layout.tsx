import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Providers } from '@/components/providers';
import { site } from '@/lib/site-data';
import './globals.css';

const montserrat = localFont({
    src: '../assets/fonts/montserrat-latin-variable.woff2',
    variable: '--font-montserrat',
    weight: '100 900',
    style: 'normal',
    display: 'swap',
});

const pixelify = localFont({
    src: '../assets/fonts/pixelify-sans-latin-variable.woff2',
    variable: '--font-pixel',
    weight: '400 700',
    style: 'normal',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://crissuu1215.github.io'),
    title: `${site.name} — AI & Full-Stack Engineer`,
    description: site.description,
    authors: [{ name: site.name }],
    openGraph: {
        title: `${site.name} — AI & Full-Stack Engineer`,
        description: site.description,
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: `${site.name} — AI & Full-Stack Engineer`,
        description: site.description,
    },
};

const themeScript = `(function(){try{var t=localStorage.getItem('cj-theme');var v=t==='light'?'light':'dark';document.documentElement.dataset.theme=v;document.documentElement.style.colorScheme=v}catch(e){}})()`;

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="en"
            data-theme="dark"
            className={`${montserrat.variable} ${pixelify.variable}`}
            suppressHydrationWarning
        >
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />
            </head>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
