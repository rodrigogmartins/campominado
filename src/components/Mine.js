import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

const CoreMine = styled.View`
  height: 14px;
  width: 14px;
  border-radius: 10px;
  background-color: black;
  align-items: center;
  justify-content: center;
`;

const Line = styled.View`
  position: absolute;
  height: 3px;
  width: 20px;
  border-radius: 3px;
  background-color: black;

  ${({ rotate }) => (rotate ? `transform: rotate(${rotate}deg);` : '')}
`;

function Mine() {
  return (
    <Container>
      <CoreMine />
      <Line />
      <Line rotate={45} />
      <Line rotate={90} />
      <Line rotate={135} />
    </Container>
  );
}

export default Mine;
