import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Paradiz Hookah Lounge & Tea House',
    short_name: 'Paradiz',
    description: 'Premium hookah and artisan tea experience in Port Moody, BC',
    start_url: '/',
    display: 'standalone',
    background_color: '#1a1a1a',
    theme_color: '#8B4513',
    icons: [
      {
        src: '/img/paradiz-icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/img/paradiz-icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
} 