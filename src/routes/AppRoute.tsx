import { AppLayout } from "@/component/layout/AppLayout";
import ForgotPasswordPage from "@/pages/auth/ForgetPassword";
import Login from "@/pages/auth/Login";
import SignUp from "@/pages/auth/SignUp";
import CoursesSection from "@/pages/Courses";
import MainDashbaord from "@/pages/student/Main-dashbaord";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "../pages/Landing";

import CertificateList from "@/pages/Certificate";
import NotificationsPage from "@/pages/NotificationPage";
import WishList from "@/pages/WishList";
import SettingsPage from "@/pages/Settings";
import AuthGuard from "./ProtectedRoute"
import RoleGuard from "./RoleGuard";
import InstructorDashboard from "@/pages/Instructor/InstructorDashboard";
import CoursesPage from "@/pages/Instructor/CoursesPage";
import CreateCourseFlow from "@/pages/Instructor/CreateCourseFlow";
import StudentList from "@/pages/Instructor/StudentList";
import Review from "@/pages/Instructor/Review";
import Announcement from "@/pages/Instructor/Announcement";
import Setting from "@/pages/Instructor/Setting";
import { VerifyPassword } from "@/pages/auth/VerifyPassword";
import CourseBuilderPage from "@/pages/Instructor/ManageCourse";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/verify-password',
    element: <VerifyPassword />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage />,
  },
  {
    path: "dashboard",
     element:<AuthGuard/>,
     children:[
      {
     element: <AppLayout />,
   
     children:[{
       //  student route
        path:"student",
      element:<RoleGuard allowedRoles={["STUDENT"]} />,
      
       
        children:[{
          index: true,
      element: <MainDashbaord />
        },
       {
      path: "courses",
      element: <CoursesSection />
    },
    {
      path: "wishlist",
      element: <WishList/>
    },
    {
      path: "notification",
      element: <NotificationsPage/>
    },
    {
      path: "certificate",
      element: <CertificateList/>
    },
    {
      path: "settings",
      element: <SettingsPage/>
    }]
      
     },

    //  instructor route
    {
       path:"instructor",
     element :<RoleGuard allowedRoles={["INSTRUCTOR"]} />,
     
       children:[{
         index: true,
         element: <InstructorDashboard />
       },
       {
         path: "courses",
         element: <CoursesPage />
       },
       {
         path: "create-course",
         element: <CreateCourseFlow />
       },
       {
         path: "studentlist",
         element: <StudentList />
       },
       {
         path: "courses/:courseId",
         element: <CourseBuilderPage />
       },
       {
         path: "review",
         element: <Review/>
       },
       {
         path: "announcement",
         element: <Announcement/>
       },
       {
         path: "setting",
         element:<Setting/>
       }

   
      ]
   
    }
    ]
     }
    
    ],


    
   

  }

]);



const AppRoute = () => {
  return <RouterProvider router={router} />
}

export default AppRoute