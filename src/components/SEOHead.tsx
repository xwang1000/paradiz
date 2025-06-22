import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'restaurant'
  structuredData?: object
}

export default function SEOHead({
  title = 'Paradiz Hookah Lounge & Tea House | Port Moody, BC',
  description = 'Experience premium hookah and artisan tea at Paradiz Hookah Lounge & Tea House in Port Moody, BC. Vancouver\'s premier hookah lounge and Middle Eastern tea house with outdoor seating and private events. Best hookah and shisha in Greater Vancouver.',
  keywords = [
    'hookah lounge', 
    'tea house', 
    'port moody', 
    'vancouver', 
    'shisha', 
    'tea', 
    'lounge',
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
  image = '/img/paradiz-og-image.jpg',
  url = 'https://paradizhookah.com',
  type = 'website',
  structuredData
}: SEOHeadProps) {
  const fullTitle = title.includes('Paradiz') ? title : `${title} | Paradiz Hookah Lounge & Tea House`
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="Paradiz Hookah Lounge & Tea House" />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Paradiz Hookah Lounge & Tea House" />
      <meta property="og:locale" content="en_CA" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  )
} 