/** @format */
const colors = require("tailwindcss/colors")
module.exports = {
	content: [
		"./src/**/*.{html,js,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		screens: {
			mobile: "508px",
			tablet: "820px",
			desktop: "1020px",
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			emerald: colors.emerald,
			indigo: colors.indigo,
			yellow: colors.yellow,
			obscure: "#0B0D17",
			lile: "#D0D6F9",
		},
	},
	plugins: [],
}
