import { GET_FEATURED_COURSE,GET_ALL_POSTS_RELATED_INFO, GET_ALL_POSTS } from "@/utils/queryCMS";
import {GET_COURSE_BY_CHAPTER_NAME, GET_PARTICULAR_POST, GET_ALL_COURSES,GET_PARTICULAR_COURSE_CHAPTERS } from "@/utils/queryCMS";
import { request, gql } from "graphql-request";

const cmsAPI = process.env.NEXT_PUBLIC_GRAPH_CMS_API_ENDPOINT;

export const getPostsRelatedInfo = async () => {
    const result = await request(cmsAPI, GET_ALL_POSTS_RELATED_INFO);
    return result.postsConnection.edges;
};

export const getPosts = async (first, skip) => {
    const variables = {
        first,
        skip
    };
    const result = await request(cmsAPI, GET_ALL_POSTS, variables);
    return result;
};

export const getParticularPost = async slug => {
    const variables = {
        slug
    };
    const result = await request(cmsAPI, GET_PARTICULAR_POST, variables);
    return result.postsConnection.edges;
};

export const getAllCourses = async () => {
    const result = await request(cmsAPI, GET_ALL_COURSES);
    return result.courseLists;
};

export const GetParticularCourseChapters=async(slug)=>{
  const variables = {
        slug
    };
    const result = await request(cmsAPI, GET_PARTICULAR_COURSE_CHAPTERS, variables);
    return result.courseList;
}

export const getCourseByChapterName=async(slug)=>{
  const variables = {
        slug
    };
    const result = await request(cmsAPI, GET_COURSE_BY_CHAPTER_NAME, variables);
    //console.log(result.courseListsConnection.edges[0].node)
    return result.courseListsConnection.edges[0].node;
}

export const getFeaturedCourse=async()=>{
    const result = await request(cmsAPI, GET_FEATURED_COURSE);
    return result.courseLists;
}


