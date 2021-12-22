import { Price, Wrapper, Category, ReleaseDate, AlbumTitle, ArtistName, Image } from 'assets/styles/MoreInfo.styles';
import { Button } from 'components/common/Button';
import { CloseIcon } from 'assets/styles/Button.styles';
import { StyledLink } from 'assets/styles/Button.styles';
import { useParams } from 'react-router-dom';
import { GetAlbum } from 'pages/mainView/Fetch';

export const MoreInfo = () => {
  const params = useParams();
  const { hit } = GetAlbum(params.albumId);

  return hit ? (
    <Wrapper>
      <StyledLink to="/">
        <Button>
          <CloseIcon />
        </Button>
      </StyledLink>
      <AlbumTitle>{hit['im:name'].label}</AlbumTitle>
      <ArtistName>{hit['im:artist'].label}</ArtistName>
      <Image src={hit['im:image'][2].label} />
      <Price>
        Price: {hit['im:price']['attributes'].amount} {hit['im:price'].attributes.currency}
      </Price>
      <Category>Category: {hit.category.attributes.label} </Category>
      <ReleaseDate>Release Date: {hit['im:releaseDate'].attributes.label} </ReleaseDate>
    </Wrapper>
  ) : (
    <Wrapper></Wrapper>
  );
};
