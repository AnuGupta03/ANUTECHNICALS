const { z } = require("zod");

const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid Email Address" })
        .min(3, { message: "Email must be at lest of 3 chars. "})
        .max(255, { message: "Email must not be more then 255 characters" }),

        password: z
        .string({ required_error: "Password is required" })
        .min(7, { message: "Password must be at lest of 6 chars. "})
        .max(1024, { message: "Password Can't be greater then 1024 characters" }),
    
})

// Creating an object schema
const signupSchema =  loginSchema.extend({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at lest of 3 chars. "})
        .max(255, { message: "Name must not be more then 255 characters" }),


    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .min(10, { message: "Phone must be at lest of 10 chars. "})
        .max(20, { message: "Phone must not be more then 20 characters" }),
});

module.exports = { signupSchema, loginSchema };

