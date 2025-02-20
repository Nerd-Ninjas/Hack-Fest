import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import Course from "./pages/dashboard/Course";
import { SiCoursera } from "react-icons/si";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
<<<<<<< HEAD
        // path: "/",
=======
        // path: "/home",
>>>>>>> 881ccf4d5cb406b6f2c01a54c34fe1f3ddd07a7c
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
<<<<<<< HEAD
        // path: "/",
=======
        // path: "/profile",
>>>>>>> 881ccf4d5cb406b6f2c01a54c34fe1f3ddd07a7c
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Report",
<<<<<<< HEAD
        // path: "/",
=======
        // path: "/tables",
>>>>>>> 881ccf4d5cb406b6f2c01a54c34fe1f3ddd07a7c
        element: <Tables />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "Learning Path",
<<<<<<< HEAD
        // path: "/",
=======
        // path: "/learning-path",
>>>>>>> 881ccf4d5cb406b6f2c01a54c34fe1f3ddd07a7c
        element: <Notifications />,
      },
      {
        icon: <SiCoursera />,
        name: "Course",
        path: "/course",
        element: <Course />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
