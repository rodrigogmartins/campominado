import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';

const LevelSelection = ({ onCancel, isVisible, onLevelSelected }) => {
  return (
    <Modal
      onRequestClose={onCancel}
      visible={isVisible}
      animationType="slide"
      transparent={true}>
      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.title}>Selecione o Nível</Text>
          <TouchableOpacity
            style={[styles.button, styles.bgEasy]}
            onPress={() => onLevelSelected(0.1)}>
            <Text style={styles.buttonLabel}>Fácil</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.bgNormal]}
            onPress={() => onLevelSelected(0.2)}>
            <Text style={styles.buttonLabel}>Normal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.bgDificil]}
            onPress={() => onLevelSelected(0.4)}>
            <Text style={styles.buttonLabel}>Difícil</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.bgKamikaze]}
            onPress={() => onLevelSelected(0.95)}>
            <Text style={styles.buttonLabel}>Kamikaze</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  container: {
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonLabel: {
    fontSize: 20,
    color: '#EEE',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    padding: 5,
  },
  bgEasy: { backgroundColor: '#49b65d' },
  bgNormal: { backgroundColor: '#2765F7' },
  bgDificil: { backgroundColor: '#F26337' },
  bgKamikaze: { backgroundColor: '#333' },
});

export default LevelSelection;
