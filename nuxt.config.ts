// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: [
        '~/assets/css/main.css',
        '@fortawesome/fontawesome-free/css/all.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    buildModules: [
        '@nuxtjs/router',
    ],
    plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
})
