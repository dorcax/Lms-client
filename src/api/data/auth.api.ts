import { VerifyPassword } from "@/pages/auth/VerifyPassword";
import { api } from "./base";
import type { AuthState, Role } from "./api.types";

type Response ={
    message:string
}

export type LoginResponse = {
  message: string
  accessToken: string
  user: {
    id: string
    email: string
    name:string
    role: Role
  }
}

type registerInput ={
    fullName:string
    email:string 
    password:string
}

type loginInput={
    email:string
    password:string
}

type verifyInput ={
  
    code:string
}

const authApi =api.injectEndpoints({
    endpoints:({mutation})=>({
        register:mutation<Response,registerInput> ({
            query:(body)=>({
                url:"/auth/sign-up",
                method:"POST",
                body

            }),
            invalidatesTags:["user"]

        }),
        
        login:mutation<LoginResponse ,loginInput>({
            query:(body)=>({
                url:"/auth/login",
                method:"POST",
                body

            }),
            invalidatesTags:["user"]
        }),
        verifyPassword:mutation<Response,verifyInput>({
            query:(body)=>({
                url:"/auth/verify-otp",
                method:"POST",
                body

            }),
            invalidatesTags:["user"]
        }),
        forgotPassword:mutation<Response,verifyInput>({
            query:(body)=>({
                url:"/auth/forgot-password",
                method:"POST",
                body

            }),
            invalidatesTags:["user"]
        })

    })

})


export const  {useRegisterMutation,useLoginMutation,useVerifyPasswordMutation} = authApi