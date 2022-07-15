import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    // {
    //   name: 'transform',
    //   enforce: 'pre',
    //   transform(code, id) {
    //     if (id.includes('src/index.ts'))
    //       return code.replace('__BUILD_TIME__', 'HI')
    //   },
    // },
  ],
  test: {
    includeSource: ['src/*.ts'],
  },
})
