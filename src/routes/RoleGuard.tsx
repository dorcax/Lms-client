import { Navigate, Outlet, useOutletContext } from "react-router-dom";

const RoleGuard = ({ allowedRoles }) => {
  // const {user} =useOutletContext()

//   const { user } = useSelector((state) => state.auth);


//  if (!user) {
//     return <Navigate to="/login" />;
//   }

  if (!allowedRoles.includes("INSTRUCTOR")) {
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />;
};


export default RoleGuard;