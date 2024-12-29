import React from "react";
const TaskManagement = React.lazy(() => import("../pages/taskManagement.js")); 
const SignIn = React.lazy(()=>import("../pages/login.js"));
const Profile = React.lazy(()=>import("../pages/profile.js"));
const Register = React.lazy(()=>import("../pages/register.js"));
export const authRoutes = [
    {
        name: "SignIn",
        path: "/signIn",
        component: <SignIn />,
        key: 0,
    },
    {
      name: "Task Management",
      path: "/taskManagement",
      component: <TaskManagement />,
      key: 1,
    },
    {
      name: "Profile",
      path: "/profile",
      component: <Profile />,
      key: 2,
    },
    {
      name: "Register",
      path: "/register",
      component: <Register />,
      key: 3,
    },
]
