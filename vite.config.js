import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueDevTools(),
	],
	// vite 相关配置
	server: {
		port: 5173,
		host: true,
		open: true,
		proxy: {
			// https://cn.vitejs.dev/config/#server-proxy
			'/dev-api': {
				target: 'http://localhost:8080',
				changeOrigin: true,
				rewrite: (p) => p.replace(/^\/dev-api/, '')
			}
		}
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		},
	},
})
