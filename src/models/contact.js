import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema(
    {
        fname: {
            type: String,
            required: [true, "first name is required !"]
        },
        lname: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: [true, "email is required !"],
            trim: true
        },
        message: {
            type: String,
            required: [true, "message is required !"]
        }
    },
    { timestamps: true }
);

export const Contact =
    mongoose.models.contacts || mongoose.model("contacts", contactSchema);
