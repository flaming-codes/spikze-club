const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio")]
};
