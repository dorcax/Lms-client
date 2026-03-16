import SignUp from "../pages/auth/SignUp";
import Landing from "../pages/Landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router  =createBrowserRouter([
  {
    path:"/",
    element: <Landing />,
  },
   {
    path: '/sign-up',
    element: <SignUp />,
  },
]);



const AppRoute =()=>{
    return <RouterProvider router={router} />
}

export default AppRoute