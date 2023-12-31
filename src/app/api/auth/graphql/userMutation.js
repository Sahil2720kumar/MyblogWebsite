import axios from "axios";
import { connectToDB } from "@/utils/database";
import vine, { errors } from "@vinejs/vine";
import { registerSchema, resetPasswordSchema } from "@/validators/authSchema";
import { loginSchema, forgotPasswordSchema } from "@/validators/authSchema";
import ErrorReporter from "@/validators/errorReporter";
import { User } from "@/models/user";
import { Author } from "@/models/author";
import bcrypt from "bcryptjs";
import cryptoRandomString from "crypto-random-string";
import Cryptr from "cryptr";
import { render } from "@react-email/render";
import ForgotPasswordEmail from "@/email/ForgotPasswordEmail";
import { transporter } from "@/utils/mail";
import {
    ErrorTypes,
    customError,
    customValidationError
} from "@/utils/graphqlErrorHandle";

const userMutation = {
    registerUser: async (parent, { input }) => {
        try {
            await connectToDB();
            const validator = vine.compile(registerSchema);
            validator.errorReporter = () => new ErrorReporter();
            const output = await validator.validate(input);
            const regUser = await User.findOne({ email: output.email });
            if (regUser) {
                customError(
                    "This email already exists.",
                    ErrorTypes.ALREADY_EXISTS
                );
            } else {
                output.password = bcrypt.hashSync(
                    output.password,
                    parseInt(process.env.BCRYPT_SALT)
                );
                const newUser = await User.create(output);
                return newUser;
            }
        } catch (error) {
            if (error instanceof errors.E_VALIDATION_ERROR) {
                customValidationError(
                    "VALIDATION_ERROR",
                    ErrorTypes.VALIDATION_ERROR,
                    error.messages
                );
            }
            return error;
        }
    },
    registerAuthor: async (parent, { input }) => {
        try {
            await connectToDB();
            const validator = vine.compile(registerSchema);
            validator.errorReporter = () => new ErrorReporter();
            const output = await validator.validate(input);

            const regUser = await Author.findOne({ email: output.email });
            if (regUser) {
                customError(
                    "This email already exists.",
                    ErrorTypes.ALREADY_EXISTS
                );
            } else {
                output.password = bcrypt.hashSync(
                    output.password,
                    parseInt(process.env.BCRYPT_SALT)
                );
                const newUser = await Author.create(output);
                return newUser;
            }
        } catch (error) {
            if (error instanceof errors.E_VALIDATION_ERROR) {
                customValidationError(
                    "VALIDATION_ERROR",
                    ErrorTypes.VALIDATION_ERROR,
                    error.messages
                );
            }
            return error;
        }
    },
    //Log In user and author
    logInUser: async (parent, { input }) => {
        try {
            await connectToDB();
            const validator = vine.compile(loginSchema);
            validator.errorReporter = () => new ErrorReporter();
            const output = await validator.validate(input);

            //check if user is exists
            const logUser = await User.findOne({ email: output.email });
            if (logUser) {
                if (!logUser.password) {
                    customError(
                        `Try login to your ${logUser.authenticate_method} account.`,
                        ErrorTypes.NOT_FOUND
                    );
                }
                //check password
                const checkPassword = bcrypt.compareSync(
                    output.password,
                    logUser.password
                );
                if (checkPassword) {
                    return logUser;
                } else {
                    customError(
                        "Password not matched !",
                        ErrorTypes.BAD_USER_INPUT
                    );
                }
            } else {
                customError(
                    "User not found with this email !",
                    ErrorTypes.NOT_FOUND
                );
            }
        } catch (error) {
            if (error instanceof errors.E_VALIDATION_ERROR) {
                customValidationError(
                    "VALIDATION_ERROR",
                    ErrorTypes.VALIDATION_ERROR,
                    error.messages
                );
            }
            return error;
        }
    },
    logInAuthor: async (parent, { input }) => {
        try {
            await connectToDB();
            const validator = vine.compile(loginSchema);
            validator.errorReporter = () => new ErrorReporter();
            const output = await validator.validate(input);

            //check if user is exists
            const logUser = await Author.findOne({ email: output.email });
            if (logUser) {
                if (!logUser.password) {
                    customError(
                        `Try login to your ${logUser.authenticate_method} account.`,
                        ErrorTypes.NOT_FOUND
                    );
                }
                //check password
                const checkPassword = bcrypt.compareSync(
                    output.password,
                    logUser.password
                );
                if (checkPassword) {
                    return logUser;
                } else {
                    customError(
                        "Password not matched !",
                        ErrorTypes.BAD_USER_INPUT
                    );
                }
            } else {
                customError(
                    "User not found with this email !",
                    ErrorTypes.NOT_FOUND
                );
            }
        } catch (error) {
            if (error instanceof errors.E_VALIDATION_ERROR) {
                customValidationError(
                    "VALIDATION_ERROR",
                    ErrorTypes.VALIDATION_ERROR,
                    error.messages
                );
            }
            return error;
        }
    },
    //forgot and reset password
    forgotPassword: async (parent, { input }) => {
        try {
            await connectToDB();
            const validator = vine.compile(forgotPasswordSchema);
            validator.errorReporter = () => new ErrorReporter();
            const output = await validator.validate(input);

            //check if user is exists
            const user = await User.findOne({ email: output.email });

            if (user) {
                //*generate random string
                const randomString = cryptoRandomString({
                    length: 64,
                    type: "alphanumeric"
                });
                user.password_reset_token = randomString;
                await user.save();
                //* Encrypt user email
                const crypt = new Cryptr(process.env.SECRET_KEY);
                const encryptEmail = crypt.encrypt(user.email);

                const url = `${process.env.BASE_URL}/reset-password/${encryptEmail}?signature=${randomString}`;
                try {
                    //ForgotPasswordEmail comontents it is imported
                    const emailHtml = render(
                        ForgotPasswordEmail({
                            params: {
                                username: user.name,
                                updatedDate: user.updatedAt,
                                url: url
                            }
                        })
                    );

                    const options = {
                        from: process.env.EMAIL_FROM,
                        to: user.email,
                        subject: "Reset Password",
                        html: emailHtml
                    };
                    //* send mail to the user
                    await transporter.sendMail(options);

                    let message =
                        "Email send sucessfully. please check your inbox.";
                    return { message };
                } catch (error) {
                    return customError(
                        "Something went to wrong...please try again later",
                        ErrorTypes.INTERNAL_SERVER_ERROR
                    );
                }
            } else {
                //console.log("im here not found")
                return customError(
                    "User not found with this email !",
                    ErrorTypes.NOT_FOUND
                );
            }
        } catch (error) {
            if (error instanceof errors.E_VALIDATION_ERROR) {
                customValidationError(
                    "VALIDATION_ERROR",
                    ErrorTypes.VALIDATION_ERROR,
                    error.messages
                );
            }
            return error;
        }
    },
    resetPassword: async (parent, { input }) => {
        try {
            await connectToDB();
            const validator = vine.compile(resetPasswordSchema);
            validator.errorReporter = () => new ErrorReporter();
            const output = await validator.validate(input);

            //* decrypt user email
            const crypt = new Cryptr(process.env.SECRET_KEY);
            const decryptEmail = crypt.decrypt(output.email);

            const user = await User.findOne({
                email: decryptEmail,
                password_reset_token: output.signature
            });
            if (user) {
                user.password = bcrypt.hashSync(
                    output.password,
                    parseInt(process.env.BCRYPT_SALT)
                );

                user.password_reset_token = null;
                await user.save();
                const message = "password change successfully.";
                return { message };
            } else {
                return customError(
                    "Reset Password URL is expired !",
                    ErrorTypes.UNAUTHENTICATED
                );
            }
        } catch (error) {
            if (error instanceof errors.E_VALIDATION_ERROR) {
                customValidationError(
                    "VALIDATION_ERROR",
                    ErrorTypes.VALIDATION_ERROR,
                    error.messages
                );
            }
            return error;
        }
    }
};

export default userMutation;
