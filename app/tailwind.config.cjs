const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "Helvetica", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        ...defaultTheme.colors,
        primary: colors.gray[900],
        secondary: colors.yellow[200],
        ternary: colors.yellow[50],
        "primary-muted": colors.slate[700],
        // neutral: colors.gray[50],
        "inverse-primary": colors.white
      }
    }
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio")]
};
