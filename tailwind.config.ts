import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      fontFamily: {
        sargento: ['Sargento Gorila', 'sans-serif'],
        got: ['Game of Thrones', 'sans-serif'],
        instrumentSans: ['Instrument Sans', 'sans-serif'],
      },
      colors: {
        regalia: '#c9a747',
        body: '#151515',
        
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      //  cursor: {
      //  auto: "url(../../public/cursor.png), auto",
      // pointer: "url(../../public/cursor-pointer.png), pointer"
      //  },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
