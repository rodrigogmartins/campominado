import React from 'react';
import styled from 'styled-components/native';

const backgroundColors = {
  easy: '#49b65d',
  normal: '#2765F7',
  hard: '#F26337',
  kamikaze: '#333',
};

const labels = {
  easy: 'Fácil',
  normal: 'Normal',
  hard: 'Difícil',
  kamikaze: 'Kamikaze',
};

const LevelOptionButton = styled.TouchableOpacity`
  margin-top: 10px;
  padding: 3px 16px;
  border-radius: 5px;
  ${({ color }) => (color ? `background-color: ${color};` : '')}
`;

const LevelOptionLabel = styled.Text`
  font-size: 17px;
  color: #fff;
  font-weight: bold;
`;

export const LevelOption = ({ onPress, difficulty }) => {
  return (
    <LevelOptionButton color={backgroundColors[difficulty]} onPress={onPress}>
      <LevelOptionLabel>{labels[difficulty]}</LevelOptionLabel>
    </LevelOptionButton>
  );
};

export const OptionsTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: #eee;
`;

export const Frame = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;
