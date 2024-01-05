import vine from "@vinejs/vine";

export const contactSaveSchema = vine.object({
    fname: vine.string().trim().minLength(2).maxLength(30),
    lname: vine.string().trim().maxLength(30),
    email: vine.string().trim().email(),
    message: vine.string().trim().minLength(5)
});

export const hireSaveSchema = vine.object({
    fullname: vine.string().trim().minLength(2).maxLength(30),
    phnumber: vine.string().trim().minLength(10),
    email: vine.string().trim().email(),
    website: vine.string().trim(),
    skills: vine.array(vine.string())
});
