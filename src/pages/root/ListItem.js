import React from 'react';
import { Wrapper, Image, Number, Description, AlbumTitle, ArtistName } from 'assets/styles/ListItem.styles';
import Button from 'components/common/Button';

export const ListItem = ({ el, index }) => {
  return (
    <Wrapper>
      <Image src={el['im:image'][2].label}></Image>
      <Number>#{index}</Number>
      <Description>
        <AlbumTitle>{el['im:name'].label}</AlbumTitle>
        <ArtistName>{el['im:artist'].label}</ArtistName>
      </Description>
      <Button>More info</Button>
    </Wrapper>
  );
};
