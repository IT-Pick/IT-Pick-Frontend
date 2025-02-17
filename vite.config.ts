import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mkcert({
      force: false,
    })
  ],
  resolve: {
    alias: {
      '@': '/src',  // schadcn으로 추가된 부분
      '@images': '/src/assets/images',
      '@components': '/src/components',
      '@utils': '/src/utils',
      '@apis': '/src/apis',  
      '@pages': '/src/pages',
      '@store': '/src/store',
      '@hooks': '/src/hooks',
    }
  },
  server: {
    https: {
      key: 'cert/localhost-key.pem',
      cert: 'cert/localhost.pem',
    },
    proxy: {
      '/auth': {
        target: 'https://itpick.store',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/auth/, '/auth')
      },
      '/user': {
        target: 'https://itpick.store',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/user/, '/user')
      },
      '/rank': {
        target: 'https://itpick.store',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/rank/, '/rank')
      },
      '/keyword': {
        target: 'https://itpick.store',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/keyword/, '/keyword')
      },
      '/debate': {
        target: 'https://itpick.store',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/debate/, '/debate')
      },
    },
  },
})
