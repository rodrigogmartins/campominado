import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  margin-top: ${({ bigger }) => (bigger ? '3px;' : '6px;')}
  margin-left: 3px;
`;

const FlagPole = styled.View`
  position: absolute;
  height: 14px;
  width: 2px;
  background-color: #222;
  margin-left: 9px;

  ${({ bigger }) =>
    bigger
      ? `
    height: 28px;
    width: 4px;
    margin-left: 16px;
  `
      : ''};
`;

const FlagCloth = styled.View`
  position: absolute;
  height: 5px
  width: 6px;
  background-color: #F22;
  margin-left: 3px;

  ${({ bigger }) =>
    bigger
      ? `
    height: 10px;
    width: 14px;
    margin-left: 3px;
  `
      : ''}
`;

const Base1 = styled.View`
  position: absolute;
  height: 2px;
  width: 6px;
  background-color: #222;
  margin-left: 7px;
  margin-top: 10px;

  ${({ bigger }) =>
    bigger
      ? `
    height: 4px
    width: 12px;
    margin-left: 12px;
    margin-top: 20px;  
  `
      : ''}
`;

const Base2 = styled.View`
  position: absolute;
  height: 2px;
  width: 10px;
  background-color: #222;
  margin-left: 5px;
  margin-top: 12px;

  ${({ bigger }) =>
    bigger
      ? `
    height: 4px
    width: 20px;
    margin-left: 8px;
    margin-top: 24px;  
  `
      : ''}
`;

function Flag({ bigger }) {
  return (
    <Container bigger={bigger}>
      <FlagPole bigger={bigger} />
      <FlagCloth bigger={bigger} />
      <Base1 bigger={bigger} />
      <Base2 bigger={bigger} />
    </Container>
  );
}

export default Flag;
