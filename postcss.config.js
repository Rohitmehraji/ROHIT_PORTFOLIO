/**
 * PostCSS is optional for this project right now.
 * Empty plugin map keeps the build stable even when Tailwind processing is not used.
 */
export default {
  plugins: {}
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
