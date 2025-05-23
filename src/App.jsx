import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Applayout from "./layout/Applayout";
import Mainpage from "./pages/Mainpage/Mainpage";
import Login from "./pages/Loginpage/Loginpage";
import News from "./pages/Listpage/Listpage";
import Detail from "./pages/Detailpage/Detailpage";
import Mypage from "./pages/Mypage/Mypage";
import SignupPage from "./pages/SignupPage/SignupPage";
import NotFoundpage from "./pages/NotFoundpage/NotFoundpage";
import PrivateRoute from "./routes/PrivateRoute";
import useSignupStore from "./stores/useSignupStore";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const { isLoggedIn } = useSignupStore();

  return (
    <Routes>
      <Route path="/" element={<Applayout />}>
        <Route index element={<Mainpage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignupPage />} />
        
        <Route
          path="news"
          element={
            <PrivateRoute isAuthenticated={isLoggedIn}>
              <News />
            </PrivateRoute>
          }
        />
        <Route
          path="news/:id"
          element={
            <PrivateRoute isAuthenticated={isLoggedIn}>
              <Detail />
            </PrivateRoute>
          }
        />
        <Route
          path="mypage"
          element={
            <PrivateRoute isAuthenticated={isLoggedIn}>
              <Mypage />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="*" element={<NotFoundpage />} />
    </Routes>
  );
}

export default App;
