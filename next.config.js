/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // If your repository name is different from your username, 
  // you'll need to set the basePath to match your repository name
  // basePath: '/personal-website',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 