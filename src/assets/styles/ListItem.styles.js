import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.s};
  /* margin-bottom: ${({ theme }) => theme.spacing[3]}; */
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
`;

export const Number = styled.div`
  margin-right: 20px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  @media (max-width: 995px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  @media (max-width: 540px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media (max-width: 411px) {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin-right: 0px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Image = styled.div`
  width: 80px;
  height: 80px;
  margin: 1.2rem;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  @media (max-width: 1190px) {
    width: 70px;
    height: 70px;
  }
  @media (max-width: 995px) {
    width: 60px;
    height: 60px;
  }
  @media (max-width: 540px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 411px) {
    width: 45px;
    height: 45px;
    margin: ${({ theme }) => theme.spacing.s};
  }
`;

export const AlbumTitle = styled.h3`
  margin: 0 auto 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;
  @media (max-width: 1190px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media (max-width: 995px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  @media (max-width: 540px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  @media (max-width: 411px) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
`;

export const ArtistName = styled.p`
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-style: italic;
  text-align: center;
  @media (max-width: 1190px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media (max-width: 995px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  @media (max-width: 540px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  @media (max-width: 411px) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
`;
