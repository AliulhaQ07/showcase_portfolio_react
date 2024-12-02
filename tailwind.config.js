/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				roboto: ["Roboto", "sans-serif"], // Add your Google font here
				montserrat: ["Montserrat", "sans-serif"], // Add your Google font here
			},
			colors: {
				primary: {
					DEFAULT: '#6c56de', // Base color
					'light-1': '#8575e4', // 10% lighter
					'light-2': '#9e94ea', // 20% lighter
					'light-3': '#b7b3ef', // 30% lighter
					'light-4': '#d0d2f5', // 40% lighter
					'light-5': '#e9f1fb', // 50% lighter
					'dark-1': '#604dc8', // 10% darker
					'dark-2': '#5544b2', // 20% darker
					'dark-3': '#493b9c', // 30% darker
					'dark-4': '#3e3286', // 40% darker
					'dark-5': '#322970', // 50% darker
				},
			},
		},
	},
	plugins: [],
};
