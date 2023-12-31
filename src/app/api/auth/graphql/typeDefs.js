import { gql } from "graphql-tag";

const typeDefs = gql`
    type User {
        _id: ID!
        name: String!
        describtion: String
        email: String!
        password: String!
        avatar: String
        role: String
        gender: String
        contact_no: String
        current_address: String
        permanant_address: String
        birthday: String
        authenticate_method: String
        password_reset_token: String
        magic_link_token: String
        magic_link_send_at: String
        createdAt: String
        updatedAt: String
    }
    
    type ForgotPasswordMessage {
      message:String!
    }
    
    type ResetPasswordMessage {
      message:String!
    }

    input RegisterUserInput {
        name: String!
        email: String!
        password: String!
        password_confirmation: String!
    }

    input RegisterAuthorInput {
        name: String!
        email: String!
        password: String!
        password_confirmation: String!
    }

    input LogInUserInput {
        email: String!
        password: String!
    }

    input LogInAuthorInput {
        email: String!
        password: String!
    }

    input ForgotPasswordInput {
        email: String!
    }
    
    input ResetPasswordInput {
        email: String!
        signature:String!
        password:String!
        password_confirmation: String!
    }

    type Query {
        getUsers: [User]!
        getAuthors: [User]!
        getUserByEmail(email: String!): User
    }

    type Mutation {
        registerUser(input: RegisterUserInput): User
        logInUser(input: LogInUserInput): User
        registerAuthor(input: RegisterAuthorInput): User
        logInAuthor(input: LogInAuthorInput): User
        forgotPassword(input:ForgotPasswordInput):ForgotPasswordMessage
        resetPassword(input:ResetPasswordInput):ResetPasswordMessage
    }
`;

export default typeDefs;
