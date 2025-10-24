import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  dts: true,
  clean: true,
  splitting: false,
  outDir: 'dist',
  format: ['cjs', 'esm']
})
