import { Poppins, Lato } from 'next/font/google';

// Configure Poppins font for headings
// Weights: 500 for sub-heads, 600 for main headings as per design.md
export const poppins = Poppins({
  variable: '--font-headings',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  style: ['normal', 'italic'],
  preload: true,
});

// Configure Lato font for body text
// Weight: 400 as per design.md
export const lato = Lato({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  style: ['normal', 'italic'],
  preload: true,
});

// Font class names utility for applying fonts
export const fontClassNames = `${poppins.variable} ${lato.variable} font-sans`;

// Font configuration object for easy access
export const fonts = {
  headings: {
    family: 'var(--font-headings)',
    weights: {
      normal: 500,
      semibold: 600,
      bold: 700,
    },
  },
  body: {
    family: 'var(--font-body)',
    weights: {
      normal: 400,
      bold: 700,
    },
  },
};

// TypeScript types for font utilities
export type FontFamily = 'headings' | 'body';
export type FontWeight = keyof typeof fonts.headings.weights | keyof typeof fonts.body.weights;