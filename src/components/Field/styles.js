import styled from 'styled-components/native';
import params from '../../params';

export const StyledField = styled.View`
  height: ${params.blockSize}px;
  width: ${params.blockSize}px;
  border-width: ${params.borderSize}px;
  background-color: ${({ exploded }) => (exploded ? 'red' : '#999')};

  ${({ opened }) =>
    opened
      ? `border-color: #777;
        align-items: center;
        justify-content: center;`
      : ''}

  ${({ opened, exploded }) =>
    !opened && !exploded
      ? `border-left-color: #CCC;
        border-top-color: #CCC;
        border-bottom-color: #555;
        border-right-color: #555;`
      : ''}
`;

const nearMinesColors = {
  1: '#010073',
  2: '#006902',
  3: '#F9060A',
  4: '#1b173d',
  5: '#ba2bb1',
  6: '#06d499',
  7: '#36054f',
  8: '#055744',
};

export const NearMines = styled.Text`
  font-weight: bold;
  font-size: ${params.fontSize}px;
  ${({ nearMines }) => `color: ${nearMinesColors[nearMines]};`}
`;
