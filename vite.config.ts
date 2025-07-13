import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@components/*": "src/components/*",
            "@pages/*": "src/pages/*",
            "@stores/*": "src/stores/*",
            "@hooks/*": "src/hooks/*",
            "@utils/*": "src/utils/*",
            "@data/*": "src/data/*",
            // 'swiper/css': 'swiper/swiper.min.css',
            // 'swiper/css/effect-coverflow': 'swiper/modules/effect-coverflow/effect-coverflow.min.css',
            // 'swiper/css/pagination': 'swiper/modules/pagination/pagination.min.css',
        }
    }
})
