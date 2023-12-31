import { gql } from "@apollo/client";

export const SIGNUP_USER = gql`
    mutation SignUpUserMutation($data: RegisterUserInput!) {
        user: registerUser(input: $data) {
            name
            email
        }
    }
`;

export const SIGNUP_AUTHOR = gql`
    mutation SignUpAuthorMutation($data: RegisterAuthorInput!) {
        user: registerAuthor(input: $data) {
            name
            email
        }
    }
`;

export const SIGNIN_USER = gql`
    mutation LogInUserMutation($data: LogInUserInput!) {
        user: logInUser(input: $data) {
            name
            email
            role
        }
    }
`;

export const SIGNIN_AUTHOR = gql`
    mutation LogInAuthorMutation($data: LogInAuthorInput!) {
        user: logInAuthor(input: $data) {
            name
            email
            role
        }
    }
`;

export const FORGOT_PASSWORD = gql`
    mutation ForgotPasswordMutation($data: ForgotPasswordInput!) {
        message: forgotPassword(input: $data) {
            message
        }
    }
`;

export const RESET_PASSWORD = gql`
    mutation ResetPasswordMutation($data: ResetPasswordInput!) {
        message: resetPassword(input: $data) {
            message
        }
    }
`;
