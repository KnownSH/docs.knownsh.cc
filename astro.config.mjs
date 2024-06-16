import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
import starlightImageZoom from 'starlight-image-zoom';
import vercel from '@astrojs/vercel/serverless';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    plugins: [starlightImageZoom()],
    title: 'DocSH',
    social: {},
    customCss: ['./src/styles/custom.css', './src/styles/tailwind.css'],
    expressiveCode: {
      styleOverrides: {
        borderRadius: '0.5rem'
      },
      themes: ['dark-plus', 'github-light']
    },
    sidebar: [{
      label: 'FiguraSVC',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: '2.0',
        link: '/guides/figurasvc2/'
      }, {
        label: '1.1',
        link: '/guides/figurasvc/'
      }, {
        label: '1.0',
        link: '/guides/figurasvc0/'
      }]
    }]
  }), tailwind({
    applyBaseStyles: false
  }), react()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});