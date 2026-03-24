import { Navigate, Outlet } from "react-router-dom";

const AuthGuard = () => {
//   const { user } = useSelector((state) => state.auth);
 const user = {
    name: "Dorcas",
    role: "INSTRUCTOR", // or "instructor" / "admin"
  };

 if (!user) {
    return <Navigate to="/login" replace  />;
  }

 

  return <Outlet />;
};

export default AuthGuard