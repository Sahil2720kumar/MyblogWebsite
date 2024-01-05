import axios from "axios";
import { connectToDB } from "@/utils/database";
import vine, { errors } from "@vinejs/vine";
import { contactSaveSchema,hireSaveSchema } from "@/validators/contactSchema";
import ErrorReporter from "@/validators/errorReporter";
import { Contact } from "@/models/contact";
import { Hire } from "@/models/hire";
import {
    ErrorTypes,
    customError,
    customValidationError
} from "@/utils/graphqlErrorHandle";



const contactMutation = {
    contactSave: async (parent, { input }) => {
        try {
            await connectToDB();
            const validator = vine.compile(contactSaveSchema);
            validator.errorReporter = () => new ErrorReporter();
            const output = await validator.validate(input);
            const newContact = await Contact.create(output);
            const message = "Contact Saved Successfully.";
            return { message };
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
    hireSave: async (parent, { input }) => {
        try {
            await connectToDB();
            const validator = vine.compile(hireSaveSchema);
            validator.errorReporter = () => new ErrorReporter();
            const output = await validator.validate(input);
            const newContact = await Hire.create(output);
            const message = "Your Entry Saved Successfully.";
            return { message };
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


export default contactMutation;