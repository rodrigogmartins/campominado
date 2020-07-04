import React from 'react';
import Field from '../Field/Field';
import { Row, Container } from './styles';

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

    return <Row key={r}>{columns}</Row>;
  });

  return <Container>{rows}</Container>;
}

export default MineField;
