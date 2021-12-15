import { Price, Wrapper, Category, ReleaseDate, AlbumTitle, ArtistName, Image } from 'assets/styles/MoreInfo.styles';
import { Button } from 'components/common/Button';
import { CloseIcon } from 'assets/styles/Button.styles';
import { useLocation } from 'react-router';
import { StyledLink } from 'assets/styles/Button.styles';

export const MoreInfo = () => {
  const data = useLocation();
  const selectedAlbum = data.state.selectedAlbum;

  return (
    <Wrapper>
      <StyledLink to="/">
        <Button>
          <CloseIcon />
        </Button>
      </StyledLink>
      <AlbumTitle>{selectedAlbum['im:name'].label}</AlbumTitle>
      <ArtistName>{selectedAlbum['im:artist'].label}</ArtistName>
      <Image src={selectedAlbum['im:image'][2].label} />
      <Price>
        Price: {selectedAlbum['im:price']['attributes'].amount} {selectedAlbum['im:price'].attributes.currency}
      </Price>
      <Category>Category: {selectedAlbum.category.attributes.label} </Category>
      <ReleaseDate>Release Date: {selectedAlbum['im:releaseDate'].attributes.label} </ReleaseDate>
    </Wrapper>
  );
};
