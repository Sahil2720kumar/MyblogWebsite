/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true
    },
    images: {
      dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**"
            }
        ]
    },
    experimental: {
        serverComponentsExternalPackages: [
            "@react-email/components",
            "@react-email/render",
            "@react-email/tailwind"
        ]
    }
};

module.exports = nextConfig;
