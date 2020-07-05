import styled from 'styled-components/native';
import React from 'react';
import Flag from '../Flag';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-top: 5px;
  padding-horizontal: 20px;
  background-color: #eee;
`;

const FlagContainer = styled.View`
  flex-direction: row;
`;

const FlagsLeft = styled.Text`
  font-size: 30px;
  font-weight: bold;
  padding-top: 5px;
  margin-left: 20px;
`;

const DifficultLevelButton = styled.TouchableOpacity`
  margin-top: 10px;
  min-width: 30px;
`;

export const Flags = ({ onPress, flagsLeft }) => {
  return (
    <FlagContainer>
      <DifficultLevelButton onPress={onPress}>
        <Flag bigger />
      </DifficultLevelButton>

      <FlagsLeft>{flagsLeft}</FlagsLeft>
    </FlagContainer>
  );
};

const Button = styled.TouchableOpacity`
  background-color: #051923;
  border-radius: 5px;
  padding: 5px 15px;
`;

const ButtonLabel = styled.Text`
  font-size: 20px;
  color: #ddd;
  font-weight: bold;
`;

export const NewGameButton = ({ onPress }) => {
  return (
    <Button onPress={onPress}>
      <ButtonLabel>Novo Jogo</ButtonLabel>
    </Button>
  );
};
