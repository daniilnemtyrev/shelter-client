import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), eslint()],
    resolve: {
        alias: {
            src: resolve(__dirname, './src'),
        },
    },
})
