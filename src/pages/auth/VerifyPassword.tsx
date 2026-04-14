import { Loader, RefreshCwIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { useForm } from "react-hook-form"
import { VerifyPasswordSchema } from "@/validation/signupValidation"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useVerifyPasswordMutation } from "@/api/data/auth.api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export function VerifyPassword() {
  const navigate = useNavigate()
  const [VerifyPassword, { isLoading }] = useVerifyPasswordMutation()
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    resolver: zodResolver(VerifyPasswordSchema)
  })


  const onSubmit = async (values: z.infer<typeof VerifyPasswordSchema>) => {
    console.log("valuess", values)
    const res = await VerifyPassword(values).unwrap()
    toast.success(res.message)
    navigate("/login")


  }

  const code = watch("code") as string
  return (
    <form className="flex justify-center items-center h-screen" onSubmit={handleSubmit(onSubmit)}>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle>Verify your login</CardTitle>
          <CardDescription>
            Enter the verification code we sent to your email address:{" "}
            <span className="font-medium">m@example.com</span>.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Field {...register("code")} >
            <div className="flex items-center justify-between">
              <FieldLabel htmlFor="otp-verification">
                Verification code
              </FieldLabel>
              <Button variant="outline" size="xs" >
                <RefreshCwIcon />
                Resend Code
              </Button>
            </div>
            <InputOTP maxLength={6} id="otp-verification" required
              value={code || ""}
              onChange={(value) => setValue("code", value)}>
              <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator className="mx-2" />
              <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>

          </Field>
        </CardContent>
        <CardFooter>
          <Field>
            <Button disabled={isLoading } type="submit" className="w-full bg-[#ec5b13]">
            {isLoading ? <Loader/> : "Verify"}
            </Button>

          </Field>
        </CardFooter>
      </Card>
    </form>
  )
}
