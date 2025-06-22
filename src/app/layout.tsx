import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import ThemeToggle from '@/components/ThemeToggle'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Paradiz Hookah Lounge & Tea House | Port Moody, BC',
    template: '%s | Paradiz Hookah Lounge & Tea House'
  },
  description: 'Experience premium hookah and artisan tea at Paradiz Hookah Lounge & Tea House in Port Moody, BC. Vancouver\'s premier hookah lounge and Middle Eastern tea house with outdoor seating and private events. Best hookah and shisha in Greater Vancouver.',
  keywords: [
    'hookah lounge',
    'tea house',
    'port moody',
    'vancouver',
    'shisha',
    'tea',
    'lounge',
    'restaurant',
    'hookah bar',
    'BC',
    'coffee shop',
    'outdoor seating',
    'private events',
    'vancouver hookah',
    'vancouver shisha',
    'BC hookah',
    'vancouver bellydance show',
    'vancouver middle eastern lounge',
    'port moody hookah',
    'port moody shisha',
    'greater vancouver hookah',
    'lower mainland hookah',
    'vancouver hookah lounge',
    'vancouver shisha bar',
    'BC shisha',
    'vancouver arabic lounge',
    'vancouver hookah cafe',
    'vancouver tea and hookah',
    'port moody tea house',
    'vancouver middle eastern restaurant'
  ],
  authors: [{ name: 'Paradiz Hookah Lounge & Tea House' }],
  creator: 'Paradiz Hookah Lounge & Tea House',
  publisher: 'Paradiz Hookah Lounge & Tea House',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://paradizhookah.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://paradizhookah.com',
    title: 'Paradiz Hookah Lounge & Tea House | Port Moody, BC',
    description: 'Experience premium hookah and artisan tea at Paradiz Hookah Lounge & Tea House in Port Moody, BC. Vancouver\'s premier hookah lounge and Middle Eastern tea house with outdoor seating and private events.',
    siteName: 'Paradiz Hookah Lounge & Tea House',
    images: [
      {
        url: '/img/paradiz-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Paradiz Hookah Lounge & Tea House - Vancouver\'s premier hookah and tea experience in Port Moody',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paradiz Hookah Lounge & Tea House | Port Moody, BC',
    description: 'Experience premium hookah and artisan tea at Paradiz Hookah Lounge & Tea House in Port Moody, BC. Vancouver\'s premier hookah lounge and Middle Eastern tea house.',
    images: ['/img/paradiz-og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <LocalBusinessSchema />
          <div className="decorative-hookah"></div>
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
} 