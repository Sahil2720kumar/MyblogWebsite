import { connectToDB } from "@/utils/database";
import { User } from "@/models/user";
import { Author } from "@/models/author";
import userMutation from "./userMutation";
import contactMutation from "./contactMutation"

import {
    ErrorTypes,
    customError,
    customValidationError
} from "@/utils/graphqlErrorHandle";

const resolvers = {
    Query: {
        getUsers: async () => {
            try {
                await connectToDB();
                return await User.find();
            } catch (error) {
                console.log(error);
            }
        },

        getAuthors: async () => {
            try {
                await connectToDB();
                return await Author.find();
            } catch (error) {
                console.log(error);
            }
        },

        getUserByEmail: async (parent, { email }) => {
            try {
                await connectToDB();
                const findUser = await User.findOne({
                    email: email
                });
                return findUser;
            } catch (error) {
                console.log(error);
            }
        }
    },
    Mutation: {
        ...userMutation,
        ...contactMutation
    }
};

export default resolvers;
