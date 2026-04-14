import { Role } from "@/api/data/api.types"
import  * as z  from "zod"



export const SignUpFormSchema=z.object({
    fullName:z.string().min(15,{
        message:"full name must be atleast 15 characters"
    }),
    email:z.email("invalid email"),
    password:z.string().min(10,{
        message:"password must be atleast 10 characters"
    }),
    role:z.enum(Role)
})



export const SignInFormSchema=z.object({
    email:z.email("enter your email"),
    password:z.string().min(10,{
        message:"password must be atleast 10 characters"
    })
})


export const VerifyPasswordSchema = z.object({
  
    code: z.string().min(6, {
        message: "OTP must be 6 characters"
    })
})