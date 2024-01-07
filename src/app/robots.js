export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: [
                "/api",
                "/forgot-password",
                "/magic-link",
                "/reset-password",
                "/api/auth/graphql",
                "/author",
                "/author/signin"
            ]
        },
        sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`
    };
}
