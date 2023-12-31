import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "name is required !"]
        },
        describtion: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: [true, "email is required !"],
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: false
        },
        avatar: {
            type: String,
            required: false
        },
        role: {
            type: String,
            required: false,
            default: "User"
        },
        gender: {
            type: String,
            required: false
        },
        contact_no: {
            type: Number,
            required: false
        },
        current_address: {
            type: String,
            required: false
        },
        permanant_address: {
            type: String,
            required: false
        },
        birthday: {
            type: Date,
            required: false
        },
        authenticate_method: {
            type: String,
            required: false,
            default: "credentials"
        },
        password_reset_token: {
            type: String,
            required: false,
            trim: true
        },
        magic_link_token: {
            type: String,
            required: false,
            trim: true
        },
        magic_link_send_at: {
            required: false,
            type: Date
        }
    },
    { timestamps: true }
);

export const User =
    mongoose.models.users || mongoose.model("users", userSchema);
