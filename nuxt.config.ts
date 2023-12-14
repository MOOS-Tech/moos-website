// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    
    store: true,
    app:{
        head: {
            title:'MOOS - Effortless Inventory',
          },
    },
 
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
    runtimeConfig: {
        public: {
            API_URL: process.env.API_URL
        }
    },
    
})
