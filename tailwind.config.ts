import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				quicksand: ['Quicksand', 'sans-serif'],
				'josefin-sans': ['"Josefin Sans"', 'sans-serif'],
				montserrat: ['"Montserrat"', 'sans-serif']
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
} as Config;
