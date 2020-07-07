import React from 'react';
import { Modal } from 'react-native';
import { Frame, Container, OptionsTitle, LevelOption } from './styles';

const LevelSelection = ({ onCancel, isVisible, onLevelSelected }) => {
  return (
    <Modal
      onRequestClose={onCancel}
      visible={isVisible}
      animationType="slide"
      transparent={true}>
      <Frame>
        <Container>
          <OptionsTitle>Selecione o Nível</OptionsTitle>
          <LevelOption
            onPress={() => onLevelSelected(0.1)}
            difficulty={'easy'}
          />
          <LevelOption
            onPress={() => onLevelSelected(0.2)}
            difficulty={'normal'}
          />
          <LevelOption
            onPress={() => onLevelSelected(0.4)}
            difficulty={'hard'}
          />
          <LevelOption
            onPress={() => onLevelSelected(0.95)}
            difficulty={'kamikaze'}
          />
        </Container>
      </Frame>
    </Modal>
  );
};

export default LevelSelection;
