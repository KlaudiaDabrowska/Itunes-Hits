import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  width: 70%;
  height: 62vh;
  margin-bottom: 10rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
`;

export const Image = styled.div`
  width: 150px;
  height: 150px;
  margin: 5rem;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
`;

export const AlbumTitle = styled.h3`
  margin: 0 auto 0.3rem;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const ArtistName = styled.p`
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-style: italic;
`;

export const Price = styled.div`
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: bold;
`;

export const Category = styled.div`
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: bold;
`;

export const ReleaseDate = styled.div`
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: bold;
`;
