import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  width: 90%;
  margin-bottom: 20px;
  border: 2px solid ${({ theme }) => theme.colors.darkPurple};
  border-radius: 20px;
`;

export const Image = styled.div`
  width: 80px;
  height: 80px;
  margin: 10px 50px 10px 100px;
  background-image: ${({ src }) => `url(${src})`};
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Number = styled.div`
  margin-right: 20px;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const AlbumTitle = styled.h3`
  margin: 0 auto 5px;
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;
`;

export const ArtistName = styled.p`
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-style: italic;
  text-align: center;
`;
