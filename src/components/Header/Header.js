import React from 'react';
import { Container, NewGameButton, Flags } from './styles';

const Header = ({ onFlagPress, flagsLeft, onNewGame }) => {
  return (
    <Container>
      <Flags onPress={onFlagPress} flagsLeft={flagsLeft} />
      <NewGameButton onPress={onNewGame} />
    </Container>
  );
};

export default Header;
