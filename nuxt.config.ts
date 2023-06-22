// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devServerHandlers: [],
    serverMiddleware: [
        // Will register file from project server-middleware directory to handle /server-api/* requests
        { path: "/api", handler: "~/server-middleware/index.ts" },
    ],
})
