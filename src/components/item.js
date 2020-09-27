import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr) auto auto auto;
  background-color: hsla(0, 100%, 100%, 0.9);
  font-size: inherit;
`;

const Input = styled.input`
  background-color: hsla(0, 100%, 100%, 0.9);
  border: none;
  font-size: inherit;
`;

const Button = styled.button`
  background-color: hsla(0, 100%, 100%, 0.9);
  border: none;
  cursor: pointer;
  font-size: inherit;
`;

const Name = styled(Input)``;
const Quantity = styled(Input)``;
const Price = styled(Input)``;
const Delete = styled(Button)``;
const Move = styled(Button)``;

const Item = ({ id }) => {
  const name = "New item";
  const quantity = 1;
  const price = 3;

  return (
    <Container>
      <Name placeholder={"Item name"} value={name} />
      <Quantity
        type="number"
        min={0}
        step={1}
        placeholder={"Quantity"}
        value={quantity}
      />
      <Price
        type="number"
        min={0}
        step={1}
        placeholder={"Price"}
        value={price}
      />
      <Move>⬆️</Move>
      <Move>⬇️</Move>
      <Delete>❌</Delete>
    </Container>
  );
};

export default Item;
