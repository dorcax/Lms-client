import { Role, type AuthState } from "@/api/data/api.types"
import { useAuthState } from "@/api/data/auth"
import { LoginResponse } from "@/api/data/auth.api"
import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const UseAuthComplete = () => {
  const auth = useAuthState()
  const navigate = useNavigate()
  const { search } = useLocation()
  return useCallback(
    async (result: Promise<LoginResponse>) => {
      const res = await result
      console.log("Logging in:", res);


      const authData = {
        token: res.accessToken,
        role: res.user.role,
        id: res.user.id,
        email: res.user.email,
        name: res.user.name
      }

      auth.set(authData)

      // CRITICAL FIX: Add a small delay to ensure cookie is stored
      await new Promise(resolve => setTimeout(resolve, 300));
      if (res.user.role === Role.STUDENT) {
        navigate('/dashboard/student', { replace: true })
      }
      else if (res.user.role === Role.INSTRUCTOR) {
        navigate("/dashboard/instructor", { replace: true })
      }
      else {
        navigate("/login", { replace: true })
      }
      return res

    }
    , [auth, search, navigate])
}

export default UseAuthComplete


