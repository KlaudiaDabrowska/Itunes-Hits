import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  width: 60%;
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  @media (max-width: 540px) {
    height: 75vh;
  }
  @media (max-width: 411px) {
    height: 65vh;
    width: 80%;
  }
`;

export const Image = styled.div`
  width: 150px;
  height: 150px;
  margin: ${({ theme }) => theme.spacing.xxl};
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  @media (max-width: 540px) {
    width: 140px;
    height: 140px;
  }
  @media (max-width: 411px) {
    width: 100px;
    height: 100px;
    margin: ${({ theme }) => theme.spacing.xl};
  }
  @media (max-width: 360px) {
    margin: ${({ theme }) => theme.spacing.m};
  }
`;

export const AlbumTitle = styled.h3`
  margin: 0 auto 0.3rem;
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-align: center;
  @media (max-width: 540px) {
    font-size: ${({ theme }) => theme.fontSize.l};
    margin: 2.5rem auto 0.3rem;
  }
  @media (max-width: 411px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    margin: 1.5rem auto 0.3rem;
  }
`;

export const ArtistName = styled.p`
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-style: italic;
  text-align: center;
  @media (max-width: 540px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  @media (max-width: 411px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const Price = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: bold;
  text-align: center;
  @media (max-width: 540px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media (max-width: 411px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const Category = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: bold;
  text-align: center;
  @media (max-width: 540px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media (max-width: 411px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const ReleaseDate = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.l};
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: bold;
  text-align: center;
  @media (max-width: 540px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media (max-width: 411px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
