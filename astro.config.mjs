import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";
import starlightImageZoom from 'starlight-image-zoom';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    plugins: [starlightImageZoom()],
    title: 'docs.KnownSH',
    social: {},
    logo: {
      src: './src/assets/icon.png'
    },
    customCss: [
		'./src/styles/custom.css',
		'./src/styles/tailwind.css'
	],
    sidebar: [{
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Example Guide',
        link: '/guides/example/'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), 
  tailwind({
	applyBaseStyles: false,
  })]
});