import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Akram Faisal',
			social: {
				github: 'https://github.com/kreee00/',
				linkedin: 'https://www.linkedin.com/in/akram-mohdfaisal/',
				email: 'mailto:mohamad_22006626@utp.edu.my',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
