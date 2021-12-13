import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

export const Title = styled.h1`
  margin-left: ${({ theme }) => theme.spacing[8]};
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: 10px;
`;
