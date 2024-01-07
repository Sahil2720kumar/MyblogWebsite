import { getAllPostsSlug, getAllChaptersSlug } from "@/services/cmsServices";

export default async function sitemap() {
    const posts = await getAllPostsSlug();
    const postsUrl = posts.map(post => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt)
        // changeFrequency:,
        // priority:
    }));

    //courses url get function
    const allSlugsQueryData = await getAllChaptersSlug();

    const coursesUrl = allSlugsQueryData.map(course => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/course/${course.slug}`,
        lastModified: new Date(course.updatedAt)
        // changeFrequency:,
        // priority:
    }));

    const coursesChapterUrl = allSlugsQueryData.flatMap(course =>
        course.chapters.map(chapter => ({
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/course/${course.slug}/${chapter.slug}`,
            lastModified: new Date(course.updatedAt)
        }))
    );

    //important url
    const routes = [
        "",
        "about",
        "privacy",
        "contact",
        "terms",
        "blog",
        "course",
        "signin",
        "signup",
        "hire"
    ];
    const importantUrl = routes.map(route => {
        return {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/${route}`,
            lastModified: new Date()
        };
    });

    return [...importantUrl, ...postsUrl, ...coursesUrl, ...coursesChapterUrl];
}
