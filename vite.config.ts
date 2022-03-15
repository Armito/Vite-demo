import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import Pages from 'vite-plugin-pages'
import VueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
    plugins: [
        vue(),
        VueSetupExtend(),
        Pages({
            exclude: ['**/components/*.vue', '**/hooks/*.vue']
        }),
        VueJsx()
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '~': path.resolve('./')
        }
    }
})
