import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; // 쿼리값을 찾아오는 것. (주소는 useParams)
import ProductCard from "./ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    const searchQuery = query.get("q") || ""; //인자값으로 키가 필요함. 만약 존재하지 않는다면 ""로 출력
    console.log(searchQuery);
    const url = `http://localhost:3000/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json(); //객체로 만들어주기
    setProductList(data);
    console.log(productList);
  };
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <Container>
      <Row>
        {productList.map((menu, index) => (
          <Col lg={3} key={index}>
            <ProductCard key={index} item={menu} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
