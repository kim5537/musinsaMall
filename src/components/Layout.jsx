import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = ({ authenticate, setAuthenticate }) => {
  //페이지 라우팅을 할 거라는 걸 정의하는 프레임 컴포넌트 --> outlet을 가지고 있어서
  return (
    <>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Outlet />
    </>
  );
};

export default Layout;
