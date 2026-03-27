/** @type {import('next').NextConfig} */
let wpHost = null;
let wpProtocol = 'https';
try {
  const wpUrl = process.env.NEXT_PUBLIC_WORDPRESS_URL || '';
  if (wpUrl) {
    const url = new URL(wpUrl);
    wpHost = url.hostname;
    wpProtocol = url.protocol.replace(':', '') || 'https';
  }
} catch {}

const nextConfig = {
  images: {
    remotePatterns: [
      ...(wpHost ? [{ protocol: wpProtocol, hostname: wpHost, pathname: '/**' }] : []),
      { protocol: 'https', hostname: '*.wordpress.com', pathname: '/**' },
      { protocol: 'https', hostname: '*.files.wordpress.com', pathname: '/**' },
    ],
  },
};

module.exports = nextConfig;
