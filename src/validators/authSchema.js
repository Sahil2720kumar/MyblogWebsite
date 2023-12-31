import vine from "@vinejs/vine"

export const registerSchema=vine.object({
  name:vine.string().trim().minLength(2).maxLength(30),
  email:vine.string().trim().email(),
  password:vine.string().minLength(6).maxLength(20).confirmed(),
})

export const loginSchema=vine.object({
  email:vine.string().trim().email(),
  password:vine.string().minLength(6).maxLength(20),
})


export const forgotPasswordSchema=vine.object({
  email:vine.string().trim().email(),
})

export const resetPasswordSchema=vine.object({
  email:vine.string(),
  signature:vine.string(),
  password:vine.string().minLength(6).maxLength(20).confirmed(),
})

export const magicLinkSchema=vine.object({
  email:vine.string().trim().email(),
})