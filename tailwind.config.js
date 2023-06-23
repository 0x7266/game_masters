/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"am-blue-darker": "rgb(29, 66, 207)",
				"am-blue-lighter": "rgb(56, 136, 252)",
			},
			fontFamily: {
				gasoek: [" Gasoek One", "sans-serif"],
				rubik: ["Rubik", "sans-serif"],
			},
		},
	},
	plugins: [],
};
