/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2563EB',
        'secondary-blue': '#06B6D4',
        'deep-navy': '#0D1117',
        'dark-gray': '#1F2937',
        'light-gray': '#9CA3AF',
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
