/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: "class",
	theme: {
		screens: {
			tablet: "600px",
			// => @media (min-width: 600px) { ... }

			laptop: "1024px",
			// => @media (min-width: 1024px) { ... }

			mobile: "340px",
			// => @media (min-width: 340px) { ... }

			desktop: "1280px",
			// => @media (min-width: 1280px) { ... }
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
