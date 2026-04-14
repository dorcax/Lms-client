import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { EyeIcon, Loader } from "lucide-react"
import { useForm } from "react-hook-form"
import { SignInFormSchema } from "@/validation/signupValidation"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import { useLoginMutation } from "@/api/data/auth.api"
import { toast } from "react-toastify"
import UseAuthComplete from "@/hooks/UseAuthComplete"
export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [login, { isLoading }] = useLoginMutation()

  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof SignInFormSchema>>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

   const authComplete = UseAuthComplete();
  const onSubmit = async (values: z.infer<typeof SignInFormSchema>) => {
    console.log(values)
    // Call your login mutation here

    const res = await authComplete(login(values).unwrap())
  
    toast.success(res.message)

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
            Welcome Back
          </h2>

          <p className="text-slate-600 dark:text-slate-400 mt-2 text-base">
            Please enter your credentials to access your courses
          </p>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-slate-900/50 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

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
                  className="px-4 py-6 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                  aria-invalid={!!errors.email}
                  {...register("email")}
                />
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
                  href="/forgot-password"
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
                  className="px-4 py-6 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"

                  {...register("password")}
                  aria-invalid={!!errors.password}
                />

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

            {/* Remember */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                className="h-4 w-4 text-primary border-slate-300 dark:border-slate-700 rounded focus:ring-primary bg-slate-50 dark:bg-slate-800"
              />

              <label
                htmlFor="remember-me"
                className="ml-2 text-sm text-slate-600 dark:text-slate-400"
              >
                Remember me for 30 days
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#ec5b13] flex justify-center items-center py-3 px-4 rounded-lg text-base font-semibold text-white  hover:bg-[#ec5b13]/90 transition-colors"
            >
              {isLoading ? <Loader /> : "Sign In"}
            </button>

          </form>


          {/* Footer */}
          <p className="text-center mt-4 text-sm text-slate-600 dark:text-slate-400">
            Don't have an account?
            <a href="/sign-up" className="font-semibold text-[#ec5b13] hover:underline">
              Sign up
            </a>
          </p>

        </div>



      </div>
    </div>
  )
}