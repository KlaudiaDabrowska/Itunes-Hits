import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-bottom: 50px;
`;

export const Title = styled.h1`
  margin-left: 100px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.black};
  letter-spacing: 10px;
`;
