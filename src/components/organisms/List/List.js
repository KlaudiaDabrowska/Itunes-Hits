import React from 'react';
import { ListItem } from 'components/molecules/ListItem.js/ListItem';
import { Wrapper } from './List.styles';

export const List = ({ hits }) => {
  return (
    <Wrapper>
      {hits.map((el, index) => (
        <ListItem el={el} index={index + 1} />
      ))}
    </Wrapper>
  );
};
