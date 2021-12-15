import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  width: 90%;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
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

export const Image = styled.div`
  width: 80px;
  height: 80px;
  margin: 1.2rem;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
`;

export const AlbumTitle = styled.h3`
  margin: 0 auto 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;
`;

export const ArtistName = styled.p`
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-style: italic;
  text-align: center;
`;
