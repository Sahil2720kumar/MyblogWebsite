import mongoose, { Schema } from "mongoose";

const hireSchema = new Schema(
    {
        fullname: {
            type: String,
            required: [true, "first name is required !"]
        },
        phnumber: {
            type: String,
            required: [true, "phone number is required !"],
        },
        email: {
            type: String,
            required: [true, "email is required !"],
            trim: true
        },
        website: {
            type: String,
            required: false
        },
        skills: {
            type: [String],
            required: [true, "skills is required !"],
            default: []
        }
    },
    { timestamps: true }
);

export const Hire =
    mongoose.models.hires || mongoose.model("hires", hireSchema);
