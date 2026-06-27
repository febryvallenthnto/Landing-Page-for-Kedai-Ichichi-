import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(), 
      tailwindcss(),
      {
        name: 'handle-root-assets',
        configureServer(server) {
          server.middlewares.use('/assets', (req, res, next) => {
            const cleanUrl = req.url!.split('?')[0];
            const decodedUrl = decodeURIComponent(cleanUrl);
            const filePath = path.join(__dirname, 'assets', decodedUrl);
            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
              const ext = path.extname(filePath).toLowerCase();
              const mimeTypes: Record<string, string> = {
                '.png': 'image/png',
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.gif': 'image/gif',
                '.svg': 'image/svg+xml',
                '.webp': 'image/webp',
              };
              res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
              fs.createReadStream(filePath).pipe(res);
            } else {
              next();
            }
          });
        },
        closeBundle() {
          const srcDir = path.resolve(__dirname, 'assets');
          const destDir = path.resolve(__dirname, 'dist/assets');
          if (fs.existsSync(srcDir)) {
            fs.mkdirSync(destDir, { recursive: true });
            const copyRecursive = (src: string, dest: string) => {
              const exists = fs.existsSync(src);
              const stats = exists && fs.statSync(src);
              const isDirectory = exists && stats && stats.isDirectory();
              if (isDirectory) {
                if (!fs.existsSync(dest)) {
                  fs.mkdirSync(dest);
                }
                fs.readdirSync(src).forEach((childItemName: string) => {
                  copyRecursive(path.join(src, childItemName), path.join(dest, childItemName));
                });
              } else {
                fs.copyFileSync(src, dest);
              }
            };
            copyRecursive(srcDir, destDir);
          }
        }
      }
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
