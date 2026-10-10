import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';

function copyStaticDirPlugin() {
  return {
    name: 'copy-static-dirs',
    closeBundle() {
      const dirsToCopy = ['js', 'assets', 'css'];
      for (const dir of dirsToCopy) {
        const srcDir = path.resolve(import.meta.dirname, dir);
        const destDir = path.resolve(import.meta.dirname, 'dist', dir);
        if (fs.existsSync(srcDir)) {
          fs.cpSync(srcDir, destDir, { recursive: true });
        }
      }
    }
  };
}

export default defineConfig({
  plugins: [copyStaticDirPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(import.meta.dirname, 'index.html'),
        about: path.resolve(import.meta.dirname, 'about.html'),
        domains: path.resolve(import.meta.dirname, 'domains.html'),
        gallery: path.resolve(import.meta.dirname, 'gallery.html'),
        contact: path.resolve(import.meta.dirname, 'contact.html')
      }
    }
  }
});
