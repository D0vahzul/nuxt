export default defineNuxtConfig({
    modules: [
      // Other modules you might use
    ],
    nitro: {
      preset: 'node-server',
    },
    typescript: {
      strict: true
    },
    css: ['@/assets/css/styles.css'],
    plugins: [
        '~/plugins/fontawesome.js'
      ],
});
