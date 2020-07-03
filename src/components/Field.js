import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import params from '../params';
import Mine from './Mine';
import Flag from './Flag';

function Field({
  mined,
  opened,
  nearMines,
  exploded,
  flagged,
  onOpen,
  onSelect,
}) {
  const styledField = [styles.field];

  if (opened) {
    styledField.push(styles.opened);
  }

  if (exploded) {
    styledField.push(styles.exploded);
  }

  if (flagged) {
    styledField.push(styles.flagged);
  }

  if (!opened && !exploded) {
    styledField.push(styles.regular);
  }

  if (styledField.length === 1) {
    styledField.push(styles.regular);
  }

  let color = null;

  if (nearMines > 0) {
    if (nearMines === 1) {
      color = '#2A28D7';
    } else if (nearMines === 2) {
      color = '#2B520F';
    } else if (nearMines > 2 && nearMines < 6) {
      color = '#F9060A';
    } else if (nearMines >= 6) {
      color = '#F221A9';
    }
  }

  return (
    <TouchableWithoutFeedback onPress={onOpen} onLongPress={onSelect}>
      <View style={styledField}>
        {!mined && opened && nearMines > 0 ? (
          <Text style={[styles.label, { color: color }]}>{nearMines}</Text>
        ) : (
          false
        )}

        {mined && opened ? <Mine /> : false}

        {flagged && !opened ? <Flag /> : false}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: '#999',
    borderLeftColor: '#CCC',
    borderTopColor: '#CCC',
    borderBottomColor: '#333',
    borderRightColor: '#333',
  },
  opened: {
    backgroundColor: '#999',
    borderColor: '#777',
    alignItems: 'center',
    justifyContent: 'center',
  },
  exploded: {
    backgroundColor: 'red',
  },
  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize,
  },
});

export default Field;
