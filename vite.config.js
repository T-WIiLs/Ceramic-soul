import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'; 

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                catalog: "catalog.html",
                blog: "blog.html",
                about: "about.html",
            },
        },
    },
    plugins: [
        ViteImageOptimizer({ 
            png: {
                quality: 70,
            },
            jpeg: {
                quality: 70,
            },
            jpg: {
                quality: 70,
            },
            webp: {
                quality: 70,
            },
        }),
    ],
});