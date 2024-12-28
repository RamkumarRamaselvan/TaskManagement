import React from "react";
const TaskManagement = React.lazy(() => import("../Assessment/taskTable.js")); 
const SignIn = React.lazy(()=>import("../Assessment/login.js"));
const Profile = React.lazy(()=>import("../Assessment/profile.js"));
const Register = React.lazy(()=>import("../Assessment/register.js"));
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
      component: <Register />,
      key: 2,
    },
    {
      name: "Register",
      path: "/register",
      component: <Register />,
      key: 3,
    },
]
