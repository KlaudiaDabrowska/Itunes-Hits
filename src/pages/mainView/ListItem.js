import React from 'react';
import { Wrapper, Number, Description, Image, AlbumTitle, ArtistName } from 'assets/styles/ListItem.styles';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from 'assets/styles/Button.styles';
import PropTypes from 'prop-types';

export const ListItem = ({ el, index }) => {
  let navigate = useNavigate();

  const handleClick = () => {
    sessionStorage.setItem('scrollPosition', window.pageYOffset);
    navigate(`/more-info/${el.id.attributes['im:id']}`);
  };

  return (
    <Wrapper>
      <Image src={el['im:image'][2].label}></Image>
      <Number>#{index}</Number>
      <Description>
        <AlbumTitle>{el['im:name'].label}</AlbumTitle>
        <ArtistName>{el['im:artist'].label}</ArtistName>
      </Description>
      <StyledButton onClick={handleClick}>More info</StyledButton>
    </Wrapper>
  );
};

ListItem.propTypes = {
  el: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
