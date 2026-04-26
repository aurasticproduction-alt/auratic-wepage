import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Instrument_Serif } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/ui/SmoothScroll';
import Loader from '@/components/ui/Loader';
import Nav from '@/components/ui/Nav';
import Footer from '@/components/ui/Footer';
import AuraMode from '@/components/ui/AuraMode';
import ScrollProgress from '@/components/motion/ScrollProgress';

/* --------------------------------------------------------------------
   Brand fonts (Aurastic identity system) — loaded as local fonts so
   the site uses the *exact* type the brand book specifies.

   Slant       → AURASTIC logo wordmark only
   Cerena      → sub-brand / descriptor labels
   Biko        → #anArtisticproduction hashtag only
   Bebas Neue  → heavy display, poster headlines
   BankGothic  → tagline ("Every event deserves an aura — we create it.")
   Rubik       → document body
   Exo         → numerical / data
   -------------------------------------------------------------------- */

const slant = localFont({
  src: '../public/fonts/slant/Aurastic.ttf',
  variable: '--font-slant',
  display: 'swap',
});

const cerena = localFont({
  src: '../public/fonts/cerena/Cerena.otf',
  variable: '--font-cerena',
  display: 'swap',
});

const biko = localFont({
  src: '../public/fonts/biko/Biko_Regular.otf',
  variable: '--font-biko',
  display: 'swap',
});

const bankgothic = localFont({
  src: '../public/fonts/bankgothic/BankGothicLightBT.ttf',
  variable: '--font-bankgothic',
  display: 'swap',
});

const bebas = localFont({
  src: [
    { path: '../public/fonts/bebas/BebasNeue-Light.ttf', weight: '300', style: 'normal' },
    { path: '../public/fonts/bebas/BebasNeue-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/bebas/BebasNeue-Bold.otf', weight: '700', style: 'normal' },
  ],
  variable: '--font-bebas',
  display: 'swap',
});

const rubik = localFont({
  src: [
    {
      path: '../public/fonts/rubik/Rubik-VariableFont_wght.ttf',
      weight: '300 900',
      style: 'normal',
    },
    {
      path: '../public/fonts/rubik/Rubik-Italic-VariableFont_wght.ttf',
      weight: '300 900',
      style: 'italic',
    },
  ],
  variable: '--font-rubik',
  display: 'swap',
});

const exo = localFont({
  src: [
    { path: '../public/fonts/exo/Exo-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/exo/Exo-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../public/fonts/exo/Exo-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../public/fonts/exo/Exo-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../public/fonts/exo/Exo-Black.ttf', weight: '900', style: 'normal' },
  ],
  variable: '--font-exo',
  display: 'swap',
});

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AURASTIC — AI Event Management & Productions',
  description:
    'Every Event Deserves an Aura. We Create It. AI-powered event management — sound, lights, LED, stage design, and execution. #anArtisticproduction',
  keywords: [
    'event management',
    'event production',
    'AI event planning',
    'sound',
    'lighting',
    'LED wall',
    'stage design',
    'DJ',
    'wedding',
    'college cultural',
    'Chennai',
    'Tamil Nadu',
  ],
  authors: [{ name: 'Aurastic Productions' }],
  openGraph: {
    title: 'AURASTIC — AI Event Management × Productions',
    description: 'Every Event Deserves an Aura. We Create It.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Aurastic',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AURASTIC — AI Event Management × Productions',
    description: 'Every Event Deserves an Aura. We Create It.',
  },
};

export const viewport: Viewport = {
  themeColor: '#050209',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fontVars = [
    slant.variable,
    cerena.variable,
    biko.variable,
    bankgothic.variable,
    bebas.variable,
    rubik.variable,
    exo.variable,
    instrument.variable,
  ].join(' ');

  return (
    <html lang="en" className={fontVars}>
      <body className="bg-void text-ink font-sans antialiased overflow-x-hidden">
        <Loader />
        <ScrollProgress />
        <AuraMode />
        <SmoothScroll>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
