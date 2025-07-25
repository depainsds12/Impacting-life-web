export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        accent2: "var(--color-accent2)",
        gray: "var(--color-gray)",
        light: "var(--color-light)",
        light2: "var(--color-light2)",
      },
      minWidth: {
        layout: 'var(--layout-width)',
      },
      maxWidth: {
        layout: 'var(--layout-width)',
      }
    },
  },
  plugins: [],
};
