// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '@/assets/css/global.css'
    ],
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    // tailwindcss: {
    //     cssPath: '~/assets/css/tailwind.css'
    // }
})
