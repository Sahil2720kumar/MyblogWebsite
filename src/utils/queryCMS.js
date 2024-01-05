import { gql } from "@apollo/client";

export const GET_ALL_POSTS_RELATED_INFO = gql`
    query GetAllPostsRelatedInfo {
        postsConnection {
            edges {
                node {
                    featuredImage {
                        url
                    }
                    content {
                        html
                    }
                    categories {
                        id
                        name
                        slug
                    }
                    author {
                        name
                        id
                        photo {
                            url
                        }
                    }
                    slug
                    title
                    featurePost
                    excerpt
                }
            }
        }
    }
`;

export const GET_ALL_POSTS = gql`
    query GetAllPostsRelatedInfo($first: Int!, $skip: Int!) {
        postsConnection(first: $first, skip: $skip) {
            edges {
                node {
                    featuredImage {
                        url
                    }
                    categories {
                        name
                    }
                    author {
                        name
                        photo {
                            url
                        }
                    }
                    slug
                    title
                    featurePost
                    excerpt
                    createdAt
                }
            }
            aggregate {
                count
            }
        }
    }
`;

export const GET_PARTICULAR_POST = gql`
    query GetParticularPost($slug: String!) {
        postsConnection(where: { slug: $slug }) {
            edges {
                node {
                    featuredImage {
                        url
                    }
                    content {
                        html
                    }
                    categories {
                        id
                        name
                        slug
                    }
                    author {
                        name
                        id
                        photo {
                            url
                        }
                    }
                    slug
                    title
                    featurePost
                    excerpt
                    createdAt
                }
            }
        }
    }
`;

export const GET_ALL_COURSES = gql`
    query GetAllCourses {
        courseLists {
            title
            slug
            totalChapters
            id
            describtion
            banner {
                url
            }
        }
    }
`;

export const GET_PARTICULAR_COURSE_CHAPTERS = gql`
    query GetParticularCourseChapters($slug: String!) {
        courseList(where: { slug: $slug }) {
            id
            banner {
                url
            }
            chapters {
                ... on Chapter {
                    id
                    slug
                    title
                    serialNo
                }
            }
        }
    }
`;

export const GET_COURSE_BY_CHAPTER_NAME = gql`
    query GetCourseByChapterName($slug: String!) {
        courseListsConnection(
            where: { chapters_some: { Chapter: { slug: $slug } } }
        ) {
            edges {
                node {
                    id
                    title
                    slug
                    chapters {
                        ... on Chapter {
                            id
                            slug
                            title
                            serialNo
                            content {
                                html
                            }
                            image {
                                url
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const GET_FEATURED_COURSE = gql`
    query GetFeaturedCourse {
        courseLists(where: { featureCourse: true }, first: 3) {
            title
            banner {
                url
            }
            describtion
            slug
            totalChapters
            id
        }
    }
`;
