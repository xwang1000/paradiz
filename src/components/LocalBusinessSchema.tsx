import Script from 'next/script'

interface LocalBusinessSchemaProps {
  name?: string
  description?: string
  url?: string
  telephone?: string
  address?: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  geo?: {
    latitude: number
    longitude: number
  }
  openingHours?: Array<{
    dayOfWeek: string[]
    opens: string
    closes: string
  }>
  servesCuisine?: string[]
  priceRange?: string
  amenityFeature?: Array<{
    name: string
    value: boolean | string
  }>
  sameAs?: string[]
}

export default function LocalBusinessSchema({
  name = 'Paradiz Hookah Lounge & Tea House',
  description = 'Premium hookah and artisan tea experience in Port Moody, BC. Vancouver\'s premier hookah lounge and Middle Eastern tea house serving the best shisha in Greater Vancouver.',
  url = 'https://paradizhookah.com',
  telephone = '+1-604-XXX-XXXX',
  address = {
    streetAddress: '3058 St Johns St',
    addressLocality: 'Port Moody',
    addressRegion: 'BC',
    postalCode: 'V3H 2C7',
    addressCountry: 'CA'
  },
  geo = {
    latitude: 49.2833,
    longitude: -122.8297
  },
  openingHours = [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '12:00',
      closes: '23:00'
    }
  ],
  servesCuisine = [
    'Hookah', 
    'Tea', 
    'Beverages',
    'Middle Eastern',
    'Arabic',
    'Shisha',
    'Hookah Lounge',
    'Tea House'
  ],
  priceRange = '$$',
  amenityFeature = [
    {
      name: 'Outdoor Seating',
      value: true
    },
    {
      name: 'Private Events',
      value: true
    }
  ],
  sameAs = ['https://instagram.com/paradizteahouse']
}: LocalBusinessSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": name,
    "description": description,
    "url": url,
    "telephone": telephone,
    "address": {
      "@type": "PostalAddress",
      ...address
    },
    "geo": {
      "@type": "GeoCoordinates",
      ...geo
    },
    "openingHoursSpecification": openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      ...hours
    })),
    "servesCuisine": servesCuisine,
    "priceRange": priceRange,
    "amenityFeature": amenityFeature.map(amenity => ({
      "@type": "LocationFeatureSpecification",
      ...amenity
    })),
    "sameAs": sameAs
  }

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
} 