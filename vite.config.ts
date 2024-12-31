import build from '@hono/vite-build/cloudflare-pages'
import adapter from '@hono/vite-dev-server/cloudflare'
import honox from 'honox/vite'
import { defineConfig } from 'vite'
import ssgBuild from '@hono/vite-ssg'
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

export default defineConfig({
  plugins: [honox({ devServer: { adapter } }), build(), ssgBuild({ entry: './app/server.ts' }),
  mdx({
    jsxImportSource: 'hono/jsx',
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter]
  })
  ],
  ssr: {
    external: [
      '@mdx-js/react',
      'satori',
      "@resvg/resvg-js",
    ],
  },
})
