


import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Eye, EyeIcon, Loader, Loader2 } from "lucide-react"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { SignUpFormSchema } from "@/validation/signupValidation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRegisterMutation } from "@/api/data/auth.api"
import { Role } from "@/api/data/api.types"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false)
    const navigate =useNavigate()
    const [signUp, { isLoading }] = useRegisterMutation()


    const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof SignUpFormSchema>>({
        resolver: zodResolver(SignUpFormSchema),
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            role: Role.INSTRUCTOR
        }

    })

    const onSubmit = async (values: z.infer<typeof SignUpFormSchema>) => {

        const res = await signUp(values).unwrap()
        console.log("res", res)
        toast.success(res.message)
        navigate("/verify-password")

    }


    return (
        <div className="flex-1 flex flex-col justify-center items-center px-4 py-12">
            <div className="w-full max-w-md space-y-8">

                {/* Header */}
                <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6">
                        <span className="material-symbols-outlined text-4xl">sc</span>
                    </div>

                    <h2 className="text-slate-900 dark:text-slate-100 text-3xl font-bold tracking-tight">
                        Join our Learning Community
                    </h2>

                    <p className="text-slate-600 dark:text-slate-400 mt-2 text-base">
                        today and unlock thousands of courses.
                    </p>
                </div>

                {/* Card */}
                <div className="bg-white dark:bg-slate-900/50 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">



                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

                        {/* name Field */}

                        <Field className="flex flex-col gap-2">
                            <FieldLabel
                                htmlFor="email"
                                className="text-slate-700 dark:text-slate-300 text-sm font-semibold"
                            >
                                Full Name
                            </FieldLabel>

                            <div className="relative">



                                <Input
                                    id="fullName"
                                    type="text"
                                    placeholder="dorcas"
                                    className=" px-4 py-6 border  border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                                    aria-invalid={!!errors.fullName}
                                    {...register("fullName")} />
                            </div>
                            {errors.fullName && <FieldError errors={[errors.fullName]} />}
                        </Field>

                        {/* Email Field */}
                        <Field className="flex flex-col gap-2">
                            <FieldLabel
                                htmlFor="email"
                                className="text-slate-700 dark:text-slate-300 text-sm font-semibold"
                            >
                                Email Address
                            </FieldLabel>

                            <div className="relative">



                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="name@university.edu"
                                    className=" px-4 py-6 border  border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                                    arial-invalid={!!errors.email}
                                    {...register("email")} />
                            </div>
                            {errors.email && <FieldError errors={[errors.email]} />}
                        </Field>

                        {/* Password Field */}
                        <Field className="flex flex-col gap-2">

                            <div className="flex justify-between items-center">
                                <FieldLabel
                                    htmlFor="password"
                                    className="text-slate-700 dark:text-slate-300 text-sm font-semibold"
                                >
                                    Password
                                </FieldLabel>

                                <a
                                    href="#"
                                    className="text-primary text-sm font-medium hover:underline"
                                >
                                    Forgot password?
                                </a>
                            </div>

                            <div className="relative">


                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="px-5 py-6 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                                    arial-invalid={!!errors.email}
                                    {...register("password")} />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                                >
                                    <span className="material-symbols-outlined text-[20px]">
                                        <EyeIcon />
                                    </span>
                                </button>

                            </div>
                            {errors.password && <FieldError errors={[errors.password]} />}

                        </Field>


                        {/* Button */}
                        <button
                        disabled={isLoading}
                            type="submit"
                            className="w-full capitalize flex justify-center bg-[#ec5b13] items-center py-3 px-4 rounded-lg text-base font-semibold text-white  hover:bg-[#ec5b13]/90 transition-colors"
                        >
                            {isLoading ? <Loader2/> : "Sign up"}
                        </button>

                    </form>

                    <p className="text-center text-sm text-slate-600 dark:text-slate-400 mt-4">
                        Already have an account ?
                        <a href="/login" className="font-semibold capitalize text-[#ec5b13] hover:underline">
                            sign in
                        </a>
                    </p>
                </div>

                {/* Footer */}


            </div>
        </div>
    )
}

