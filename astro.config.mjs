import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
import starlightImageZoom from 'starlight-image-zoom';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    plugins: [starlightImageZoom()],
    title: 'DocSH',
    social: {},
    customCss: ['./src/styles/custom.css', './src/styles/tailwind.css'],
    expressiveCode: {
      styleOverrides: { 
        borderRadius: '0.5rem',
      },
      themes: ['dark-plus', 'github-light']
    },
    sidebar: [{
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'FiguraSVC 1.1.0',
        link: '/guides/figurasvc/'
      }]
    }]
  }), tailwind({
    applyBaseStyles: false
  })],
  output: "server",
  adapter: vercel()
});