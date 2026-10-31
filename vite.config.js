import { readFileSync } from 'fs';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        resume: resolve(import.meta.dirname, 'resume.html'),
        privacy: resolve(import.meta.dirname, 'privacy.html'),
        fieldwork: resolve(import.meta.dirname, 'projects/fieldwork.html'),
        castTours: resolve(import.meta.dirname, 'projects/cast-tours.html'),
        detaildesk: resolve(import.meta.dirname, 'projects/detaildesk.html'),
        efolio: resolve(import.meta.dirname, 'projects/efolio.html'),
        aiJobSearch: resolve(import.meta.dirname, 'projects/ai-job-search.html'),
      },
    },
  },
  plugins: [
    {
      name: 'copy-public-resume',
      generateBundle() {
        this.emitFile({
          type: 'asset',
          fileName: 'assets/SWE_Public_Master_Resume.pdf',
          source: readFileSync(resolve(import.meta.dirname, 'assets/SWE_Public_Master_Resume.pdf')),
        });
      },
    },
  ],
});
