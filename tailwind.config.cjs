/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'thame-1': 'hsl(15deg 100% 55%)',
				'thame-2': 'hsl(240, 8%, 44%)',
				'thame-3': 'hsl(204, 100%, 63%)',
				'thame-1-variant': 'hsl(15, 100%, 40%)',
				'thame-2-variant': 'hsl(240, 8%, 35%)',
				'thame-3-variant': 'hsl(204, 100%, 50%)',
				'black-1': 'hsl(0, 0%, 10%)',
				'black-2': 'hsl(0, 0%, 18%)',
				'black-3': 'hsl(0, 0%, 22%)',
				'black-4': 'hsl(0, 0%, 40%)',
				'text-1': 'hsl(0, 0%, 90%)',
				'text-2': 'hsl(0, 0%, 80%)',
				'text-3': 'hsl(0, 0%, 65%)'
			},
			fontFamily: {
				overpass: ['overpass', 'sans-serif']
			}
		}
	},
	plugins: []
};
