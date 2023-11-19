import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  base: '/sign-up-form-for-odin-project/',
  plugins: [
    createHtmlPlugin({
      minify: true,
    }),
  ],
})
