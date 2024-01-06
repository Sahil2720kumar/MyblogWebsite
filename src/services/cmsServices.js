import {
    GET_FEATURED_COURSE,
    GET_ALL_POSTS_RELATED_INFO,
    GET_ALL_POSTS
} from "@/utils/queryCMS";
import {
    GET_COURSE_BY_CHAPTER_NAME,
    GET_PARTICULAR_POST,
    GET_ALL_COURSES,
    GET_PARTICULAR_COURSE_CHAPTERS,
    GET_ALL_CHAPTERS_SLUG
} from "@/utils/queryCMS";
import { request, gql } from "graphql-request";
import { cache } from "react";

const cmsAPI = process.env.NEXT_PUBLIC_GRAPH_CMS_API_ENDPOINT;

export const getPostsRelatedInfo = cache(async () => {
    const result = await request(cmsAPI, GET_ALL_POSTS_RELATED_INFO);
    return result.postsConnection.edges;
});

export const getPosts = cache(async (first, skip) => {
    const variables = {
        first,
        skip
    };
    const result = await request(cmsAPI, GET_ALL_POSTS, variables);
    return result;
});

export const getParticularPost = cache(async slug => {
    const variables = {
        slug
    };
    const result = await request(cmsAPI, GET_PARTICULAR_POST, variables);
    return result.postsConnection.edges;
});

export const getAllCourses = cache(async () => {
    const result = await request(cmsAPI, GET_ALL_COURSES);
    return result.courseLists;
});

export const GetParticularCourseChapters = cache(async slug => {
    const variables = {
        slug
    };
    const result = await request(
        cmsAPI,
        GET_PARTICULAR_COURSE_CHAPTERS,
        variables
    );
    return result.courseList;
});

export const getCourseByChapterName = cache(async slug => {
    const variables = {
        slug
    };
    const result = await request(cmsAPI, GET_COURSE_BY_CHAPTER_NAME, variables);
    //console.log(result.courseListsConnection.edges[0].node)
    return result.courseListsConnection.edges[0].node;
});

export const getFeaturedCourse = cache(async () => {
    const result = await request(cmsAPI, GET_FEATURED_COURSE);
    return result.courseLists;
});

export const getAllChaptersSlug = cache(async () => {
    const result = await request(cmsAPI, GET_ALL_CHAPTERS_SLUG);
    return result.courseLists;
});



