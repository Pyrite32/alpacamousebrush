import { Barlow_Condensed, Jersey_10, Jersey_15, Jersey_20 } from 'next/font/google';

export const pixelChoppy = Jersey_10({
  weight: '400',
  fallback: ['Jersey', 'sans-serif'],
  display: 'swap',
  variable: '--font-pixel-choppy',
  subsets: ['latin'],
});

export const pixelSemiSmooth = Jersey_15({
    weight: '400',
    fallback: ['Jersey', 'sans-serif'],
    display: 'swap',
    variable: '--font-pixel-semi-smooth',
    subsets: ['latin'],
});

export const pixelSmooth = Jersey_20({
    weight: '400',
    fallback: ['Jersey', 'sans-serif'],
    display: 'swap',
    variable: '--font-pixel-smooth',
    subsets: ['latin'],
});

export const sansTopic = Barlow_Condensed({
    weight: '700',
    style: 'italic',
    display: 'swap',
    variable: '--font-sans-topic',
    subsets: ['latin', 'latin-ext'],
});

export const sansTopicMini = Barlow_Condensed({
    weight: '600',
    style: 'italic',
    display: 'swap',
    variable: '--font-sans-topic-mini',
    subsets: ['latin', 'latin-ext'],
});

export const sansButtonText = Barlow_Condensed({
    weight: '700',
    style: 'normal',
    variable: '--font-sans-button-text',
    subsets: ['latin', 'latin-ext'],
});