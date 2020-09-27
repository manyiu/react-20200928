import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: hsla(0, 100%, 100%, 0.9);
`;

const Total = () => {
  const total = 0;

  if (total > 0) {
    return <Container>Total: ${total}</Container>;
  } else {
    return null;
  }
};

export default Total;
