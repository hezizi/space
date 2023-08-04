import createMDX from '@next/mdx'
import frontmatter from 'remark-frontmatter'

// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
  // experimental: {
  //   mdxRs: true
  // }
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [frontmatter]
  }
})
export default withMDX(nextConfig)
