// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

const lucideIcons = [
  'badge-check',
  'phone',
  'map-pin',
  'award',
  'timer',
  'shield-check',
  'wallet',
  'smartphone',
  'battery-charging',
  'droplets',
  'cpu',
  'mic',
  'star',
  'help-circle'
];

// https://astro.build/config
export default defineConfig({
  inlineStylesheets: 'always',
  integrations: [
    icon({
      include: {
        lucide: lucideIcons
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
