import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/tasks-pet/",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@app": path.resolve(__dirname, "./src/app"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@widgets": path.resolve(__dirname, "./src/widgets"),
            "@features": path.resolve(__dirname, "./src/features"),
            "@entities": path.resolve(__dirname, "./src/entities"),
            "@shared": path.resolve(__dirname, "./src/shared"),
        },
    },
    css: {
        modules: {
            generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
        devSourcemap: true,
    },
    build: {
        cssCodeSplit: false,
    },
    server: {
        open: true,
    },
});
