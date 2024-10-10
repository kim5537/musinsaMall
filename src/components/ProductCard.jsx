import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 300px;
  border-radius: 10px;
  margin-bottom: 10px;
  &:hover {
    scale: 1.01;
  }
`;

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const formattedPrice = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  }).format(item.price); //해당 국가에서 사용하는 통화를 가져오는 객체임

  const showDetail = () => {
    navigate(`products/${item.id}`);
  };
  return (
    <Wrapper onClick={showDetail}>
      <Img src={item && item?.img} />
      <div>Conscious Choice</div>
      <div>{item && item?.title}</div>
      <div>{item && formattedPrice}</div>
      <div> {item && item?.new === true ? "신제품" : "이벤트 제품"} </div>
    </Wrapper>
  );
};

export default ProductCard;
