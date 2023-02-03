import { lazy } from "react";
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import('../pages/login'));
const SignUp = lazy(() => import('../pages/SignUp'));
// const Home = lazy(() => import('../pages/Home'));
// const Home = lazy(() => import('../pages/Home'));
// const Home = lazy(() => import('../pages/Home'));
// const Home = lazy(() => import('../pages/Home'));

const PATHS = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
};

export const router = [
  {
    path: PATHS.HOME,
    element: <Home />,
  },
  {
    path: PATHS.LOGIN,
    element: <Login />,
  },
  {
    path: PATHS.SIGNUP,
    element: <SignUp />,
  },
];
