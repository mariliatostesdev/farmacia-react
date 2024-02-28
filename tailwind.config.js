/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [],
	theme: {
		screens: {
			xxsm: '440px',
			// => @media (min-width: 440px) { ... }

			xsm: '640px',
			// => @media (min-width: 640px) { ... }

			sm: '740px',
			// => @media (min-width: 760px) { ... }

			md: '1024px',
			// => @media (min-width: 950px) { ... }

			lg: '1440px',
			// => @media (min-width: 1024px) { ... }
		},
	},
};

/*				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
						@media (min-width: 400px and max-width: 640px){grid - cols - 1}
						@media (min-width: 640px and max-width: 950px){grid - cols - 2}
						@media (min-width: 1024px and max-width: 1540px){grid - cols - 3}
						@media (min-width: 1540px){grid - cols - 4}*/
