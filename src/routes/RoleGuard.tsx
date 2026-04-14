import { useAppSelector } from "@/api/data";
import { Navigate, Outlet } from "react-router-dom";

const RoleGuard = ({ allowedRoles }) => {
  // const {user} =useOutletContext()

  const { role } = useAppSelector((state) => state.auth);
  console.log("role guard user", role)


  if (!role) {
    return <Navigate to="/login" replace />;
  }



  if (!allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />;
};


export default RoleGuard;