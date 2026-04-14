import { useAppSelector } from "@/api/data";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthGuard = () => {

    const {token} = useAppSelector((state) => state.auth);
    console.log(token)



 if (!token) {
    return <Navigate to="/login" replace  />;
  }

 

  return <Outlet />;
};

export default AuthGuard