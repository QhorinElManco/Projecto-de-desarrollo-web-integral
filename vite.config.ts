import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {getViteAliases} from "./config/aliases.ts";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: getViteAliases()
    }
})
