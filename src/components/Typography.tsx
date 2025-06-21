import React from 'react';

// Global typography classes for consistent styling across the site
export const typographyClasses = {
  // Category headings (main sections)
  category: "text-2xl font-higuen mb-4 text-accent uppercase tracking-[2px]",
  
  // Subcategory headings
  subcategory: "text-sm font-brandon-bold uppercase tracking-[1px] text-accent",
  
  // Menu item names
  menuItem: "font-medium font-brandon-bold uppercase tracking-[1px] flex items-center gap-1",
  
  // Menu item names (smaller variant for grid layouts)
  menuItemSmall: "font-medium font-brandon-bold uppercase tracking-[1px] text-sm flex items-center gap-1",
  
  // Prices
  price: "text-base font-brandon-bold uppercase tracking-wide text-accent",
  
  // Notes/descriptions
  note: "text-sm text-gray-700 ml-0 mt-0 font-brandon lowercase",
  
  // Flavors
  flavors: "text-sm text-gray-500",
  
  // Page headings
  pageHeading: "text-4xl md:text-5xl font-higuen font-bold mb-4 uppercase tracking-[2px]",
  
  // Page subtitles
  pageSubtitle: "text-xl font-brandon tracking-[1px]",
  
  // Section headings
  sectionHeading: "text-2xl font-higuen font-bold text-teal mb-6 uppercase tracking-[2px]",
  
  // Body text
  bodyText: "text-lg font-brandon leading-relaxed",
  
  // Form labels
  formLabel: "block text-sm font-brandon font-medium text-gray-700",
  
  // Form inputs
  formInput: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal focus:ring-teal font-brandon",
  
  // Buttons
  button: "font-brandon font-medium tracking-[1px]",
  
  // Contact info
  contactInfo: "font-brandon",
  
  // Today badge
  todayBadge: "bg-creme text-teal px-2 py-1 rounded-full text-xs font-brandon font-bold"
};

// Typography component for easy usage
interface TypographyProps {
  variant: keyof typeof typographyClasses;
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function Typography({ variant, children, className = "", as: Component = "div" }: TypographyProps) {
  const baseClass = typographyClasses[variant];
  const combinedClass = `${baseClass} ${className}`.trim();
  
  return React.createElement(Component, { className: combinedClass }, children);
}

// Convenience components for common use cases
export function CategoryHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <Typography variant="category" className={className}>{children}</Typography>;
}

export function SubcategoryHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <Typography variant="subcategory" className={className}>{children}</Typography>;
}

export function MenuItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <Typography variant="menuItem" className={className}>{children}</Typography>;
}

export function MenuItemSmall({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <Typography variant="menuItemSmall" className={className}>{children}</Typography>;
}

export function Price({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <Typography variant="price" className={className}>{children}</Typography>;
}

export function Note({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <Typography variant="note" className={className}>{children}</Typography>;
}

export function Flavors({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <Typography variant="flavors" className={className}>{children}</Typography>;
}

export function PageHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <Typography variant="pageHeading" as="h1" className={className}>{children}</Typography>;
}

export function PageSubtitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <Typography variant="pageSubtitle" className={className}>{children}</Typography>;
}

export function SectionHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <Typography variant="sectionHeading" as="h2" className={className}>{children}</Typography>;
}

export function BodyText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <Typography variant="bodyText" className={className}>{children}</Typography>;
}

export default Typography; 