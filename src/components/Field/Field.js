import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Mine from '../Mine';
import Flag from '../Flag';
import { StyledField, NearMines } from './styles';

function Field({
  mined,
  opened,
  nearMines,
  exploded,
  flagged,
  onOpen,
  onSelect,
}) {
  return (
    <TouchableWithoutFeedback onPress={onOpen} onLongPress={onSelect}>
      <StyledField opened={opened} exploded={exploded}>
        {!mined && opened && nearMines > 0 ? (
          <NearMines nearMines={nearMines}>{nearMines}</NearMines>
        ) : (
          false
        )}

        {mined && opened ? <Mine /> : false}

        {flagged && !opened ? <Flag /> : false}
      </StyledField>
    </TouchableWithoutFeedback>
  );
}

export default Field;
