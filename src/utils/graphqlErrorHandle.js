import { GraphQLError } from "graphql";
import { ApolloServerErrorCode } from "@apollo/server/errors";

export const ErrorTypes = {
    BAD_USER_INPUT: {
        errorCode: ApolloServerErrorCode.BAD_USER_INPUT,
        errorStatus: 400
    },
    BAD_REQUEST: {
        errorCode: ApolloServerErrorCode.BAD_REQUEST,
        errorStatus: 400
    },
    NOT_FOUND: {
        errorCode: "NOT_FOUND",
        errorStatus: 404
    },
    UNAUTHENTICATED: {
        errorCode: "UNAUTHENTICATED",
        errorStatus: 401
    },
    ALREADY_EXISTS: {
        errorCode: "ALREADY_EXISTS",
        errorStatus: 400
    },
    INTERNAL_SERVER_ERROR: {
        errorCode: ApolloServerErrorCode.INTERNAL_SERVER_ERROR,
        errorStatus: 500
    },
    VALIDATION_ERROR: {
        errorCode: "VALIDATION_ERROR",
        errorStatus: 400
    }
};

//ThrowCustomError
export const customError = (errorMessage, errorType) => {
    console.log("errorMessage", errorMessage);
    console.log("typesError", errorType);
    throw new GraphQLError(errorMessage, {
        extensions: {
            code: errorType.errorCode,
            status:errorType.errorStatus,
            http: {
                status: errorType.errorStatus // Change status to 404 for "not found" error
            }
        }
    });
};

//ThrowValidationCustomError
export const customValidationError = (
    errorMessage,
    errorType,
    errorValidation
) => {
    console.log("errorMessage", errorMessage);
    console.log("typesError", errorType);
    throw new GraphQLError(errorMessage, {
        extensions: {
            code: errorType.errorCode,
            status:errorType.errorStatus,
            errors: errorValidation,
            http: {
                status: errorType.errorStatus // Change status to 404 for "not found" error
            }
        }
    });
};
