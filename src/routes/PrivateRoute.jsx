import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail"; // props(app) 받은 값에 따라 productDetail을 출력

const PrivateRoute = ({ authenticate }) => {
  return authenticate === true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
