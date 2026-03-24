import { Input } from "@/components/ui/input"
import { ArrowBigLeft, ArrowLeft, LockIcon, LockKeyhole, LockOpenIcon } from "lucide-react"

export default function ForgotPasswordPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">

        {/* Top Navigation */}
        <div className="flex items-center p-4 pb-2 justify-between">
          <button
            aria-label="Go back"
            className="text-slate-900 dark:text-slate-100 flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-primary/10 transition-colors"
          >
            <ArrowLeft />
          </button>

          <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
            Forgot Password
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-[480px] w-full mx-auto px-4 flex flex-col justify-center flex-1 py-12">

          {/* Icon */}
          <div className="flex justify-start mb-6">
            <div className="w-10 h-10 rounded-lg  bg-[#ec5b13]/50 flex items-center justify-center">
             
              <LockOpenIcon className="text-[#ec5b13]"/>
            </div>
          </div>

          {/* Header */}
          <h1 className="text-slate-900 dark:text-slate-100 tracking-light text-[32px] font-bold leading-tight pb-3">
            Reset Password
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed pb-8">
            Enter the email address associated with your account and we'll send
            you a link to reset your password.
          </p>

          {/* Form */}
          <div className="flex flex-col gap-6">

            <div className="flex flex-wrap items-end gap-4">

              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-slate-700 dark:text-slate-300 text-sm font-semibold leading-normal pb-2">
                  Email Address
                </p>

                <div className="relative">

                  <Input
                    type="email"
                    placeholder="name@company.com"
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-slate-100 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 h-14 placeholder:text-slate-400 px-4  py-6 text-base font-normal leading-normal transition-all"
                  />

               

                </div>
              </label>

            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3">

              <button
                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-[#ec5b13] text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
              >
                <span className="truncate">Send Reset Link</span>
              </button>

              <a
                href="/login"
                className="flex h-10 items-center justify-center text-[#ec5b13] text-sm font-semibold hover:underline"
              >
                Back to Login
              </a>

            </div>

          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
            <p className="text-slate-500 dark:text-slate-500 text-sm">
              Don't have an account?{" "}
              <a className="text-[#ec5b13] font-bold hover:underline" href="/sign-up">
                Sign Up
              </a>
            </p>
          </div>

        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 translate-y-1/2"></div>

        <div className="absolute top-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2"></div>

      </div>
    </div>
  )
}