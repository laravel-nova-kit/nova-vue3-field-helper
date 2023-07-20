import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  root: 'src',
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      'laravel-nova': path.join(
        __dirname,
        'vendor/laravel/nova/resources/js/mixins/packages.js'
      ),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  define: {
    'process.env': process.env,
  },
  build: {
    cssCodeSplit: true,
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    manifest: false,
    sourcemap: true,
    target: 'es2020',
    minify: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'nova-vue3-helper',
      formats: ['es', 'cjs', 'umd'],
      fileName: 'nova-vue3-helper',
    },
    rollupOptions: {
      input: path.resolve(__dirname, 'src/index.ts'),
      external: [
        'vue',
        '@inertiajs/inertia',
        '@inertiajs/inertia-vue3',
        'nova',
        'laravel-nova',
      ],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          nova: 'Nova',
          'laravel-nova': 'LaravelNova',
        },
      },
    },
  },
});
