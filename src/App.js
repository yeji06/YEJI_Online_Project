import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Link,
  Switch,
} from "react-router-dom";

import "./style.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotEmail from "./pages/ForgotEmail";
import ForgotPassword from "./pages/ForgotPassword";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Search from "./pages/Search";
import Courses from "./pages/Courses";
import OnlineStudy from "./pages/OnlineStudy";
import Profile from "./pages/Profile";
import MyOnline from "./pages/MyOnline";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Lecturelist from "./pages/Lecturelist";
import ListMenu from "./pages/ListMenu";
import Detail from "./pages/Detail";
import WishList from "./pages/wishlist";
import Paymentlist from "./pages/Paymentlist";
import Progress from "./pages/Progress";
import Curriculm from "./pages/Curriculm";
import PaymentPopup from "./pages/PaymentPopup";
import Lectureplay from "./pages/LecturePlay";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/post/:id", element: <Single /> },
      { path: "/write", element: <Write /> },
      { path: "/search", element: <Search /> },
      { path: "/courses", element: <Courses /> },
      { path: "/profile", element: <Profile /> },
      { path: "/myonline", element: <MyOnline /> },
      { path: "/cart", element: <Cart /> },
      { path: "/payment", element: <Payment /> },
      { path: "/lecturelist", element: <Lecturelist /> },
      { path: "/listmenu", element: <ListMenu /> },
      { path: "/Detail", element: <Detail /> },
      { path: "/wishlist", element: <WishList /> },
      { path: "/paymentlist", element: <Paymentlist /> },
      { path: "/Progress", element: <Progress /> },
      { path: "/Curriculm", element: <Curriculm /> },
      { path: "/PaymentPopup", element: <PaymentPopup /> },
      { path: "/Lectureplay", element: <Lectureplay /> },
    ],
  },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/onlinestudy", element: <OnlineStudy /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/forgot-email", element: <ForgotEmail /> },

  ,
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
