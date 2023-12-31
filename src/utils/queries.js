import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
    query GetAllUsersQuery {
        getUsers {
            name
            email
        }
    }
`;

export const GET_USER_BY_EMAIL = gql`
    query GetuserbyEmail($email: String!) {
        user: getUserByEmail(email: $email) {
            name
            describtion
            email
            role
            gender
            contact_no
            current_address
            permanant_address
            birthday
            createdAt
            updatedAt
        }
    }
`;

export const GET_ALL_AUTHORS = gql`
    query GetAllAuthorsQuery {
        getAuthors {
            name
            email
        }
    }
`;
