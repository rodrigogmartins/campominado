import React from 'react';
import { View, StyleSheet } from 'react-native';
import Field from './Field';

function MineField({ board, onOpenField, onSelectField }) {
  const rows = board.map((row, r) => {
    const columns = row.map((field, c) => {
      return (
        <Field
          {...field}
          key={c}
          onSelect={() => onSelectField(r, c)}
          onOpen={() => onOpenField(r, c)}
        />
      );
    });

    return (
      <View key={r} style={{ flexDirection: 'row' }}>
        {columns}
      </View>
    );
  });

  return <View style={styles.container}>{rows}</View>;
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#EEE' },
});

export default MineField;
