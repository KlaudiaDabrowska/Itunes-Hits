import React from 'react';
import { Wrapper, Number, Description, Image, AlbumTitle, ArtistName } from 'assets/styles/ListItem.styles';
import { Button } from 'components/common/Button';
import { Link } from 'react-router-dom';

export const ListItem = ({ el, index }) => {
  const handleClick = (e) => {
    sessionStorage.setItem('scrollPosition', window.pageYOffset);
  };

  return (
    <Wrapper>
      <Image src={el['im:image'][2].label}></Image>
      <Number>#{index}</Number>
      <Description>
        <AlbumTitle>{el['im:name'].label}</AlbumTitle>
        <ArtistName>{el['im:artist'].label}</ArtistName>
      </Description>
      <Link to="/more-info" state={{ selectedAlbum: el }} onClick={handleClick}>
        <Button>More info</Button>
      </Link>
    </Wrapper>
  );
};
