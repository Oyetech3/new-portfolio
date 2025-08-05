import type { NextConfig } from "next";

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    
    remarkPlugins: [],
    rehypePlugins: [],
    
    providerImportSource: "@mdx-js/react",
  },
})

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['http://172.20.10.8:3000'],
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
};


module.exports = withMDX(nextConfig);

export default nextConfig;
