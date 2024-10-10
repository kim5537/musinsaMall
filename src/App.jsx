import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { styled, createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Layout from "./components/Layout";
import ProductAll from "./components/ProductAll";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import PrivateRoute from "./routes/PrivateRoute";

const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul,li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const App = () => {
  const [authenticate, setAuthenticate] = useState(false); //최초에는 로그아웃 상태를 초기값을 준다.

  //outlet 필요. 현제는 layout에 있다. >>원래는 외부에 있는게 대부분이지만 지금 state값을 전달해주기 위해 함수의 내부로 넣었다.
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout authenticate={authenticate} setAuthenticate={setAuthenticate} />
      ), //default컴포넌트는 state의 상황을 알아야한다(부모이기 때문) //setState는 navbar에 있는 로그인 버튼을 관리하기 위해 전달한 것이다.
      children: [
        {
          // path: "/",
          index: true, //부모요소가 가지고있는 index 페이지를 그대로 가져간다는 의미로 위 주석과 같은 의미이다.
          element: <ProductAll />,
        },
        {
          path: "login",
          element: (
            <Login
              authenticate={authenticate}
              setAuthenticate={setAuthenticate}
            />
          ),
        },
        {
          path: "products/:id",
          element: <PrivateRoute authenticate={authenticate} />,
        },
      ],
    },
  ]);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
