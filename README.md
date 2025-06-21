# Paradiz Hookah Lounge & Tea House

A modern, responsive website for Paradiz Hookah Lounge & Tea House built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, elegant design with custom typography
- **Responsive**: Fully responsive across all devices
- **Dark/Light Theme**: Toggle between dark and light themes
- **Animated Logo**: Interactive logo that transforms on scroll
- **Universal Navigation**: Consistent navigation across all pages
- **Menu Display**: Beautiful menu layout with categories and pricing
- **Custom Fonts**: Higuen and Brandon fonts for elegant typography

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Fonts**: Custom Higuen and Brandon fonts

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd paradiz
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── globals.css     # Global styles and custom fonts
│   ├── layout.tsx      # Root layout with theme provider
│   ├── page.tsx        # Homepage
│   ├── menu/           # Menu page
│   ├── about-us/       # About page
│   ├── contact/        # Contact page
│   └── hours/          # Hours page
├── components/         # Reusable components
│   ├── Navigation.tsx  # Universal navigation
│   └── ThemeProvider.tsx # Theme context provider
└── data/              # Static data
    └── menu.js        # Menu items data
public/
├── fonts/             # Custom font files
└── img/               # Images and assets
```

## Deployment

This project can be easily deployed to:

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **Railway**
- **Render**

## Customization

### Fonts
The project uses custom fonts:
- **Higuen Elegance Serif**: For headings and titles
- **Brandon Text**: For body text and descriptions

### Colors
The color scheme can be customized in `tailwind.config.ts` and `globals.css`.

### Menu Items
Menu items are stored in `src/data/menu.js` and can be easily updated.

## License

This project is private and proprietary to Paradiz Hookah Lounge & Tea House.

## Contact

For questions or support, please contact the development team. 