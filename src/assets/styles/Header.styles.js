import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: 8px;
  text-transform: uppercase;
  text-align: center;
  @media (max-width: 1190px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  @media (max-width: 540px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
