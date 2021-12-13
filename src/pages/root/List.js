import React from 'react';
import { ListItem } from './ListItem';
import { Wrapper } from 'assets/styles/List.styles';

export const List = ({ hits }) => {
  return (
    <Wrapper>
      {hits.map((el, index) => (
        <ListItem el={el} index={index + 1} key={el.id.attributes['im:id']} />
      ))}
    </Wrapper>
  );
};
