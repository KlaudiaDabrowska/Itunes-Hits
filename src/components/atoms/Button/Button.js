import styled from 'styled-components';

export const Button = styled.button`
  padding: 7px 20px;
  margin: 15px 50px;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.darkPurple};
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.darkPurple};
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkPurple};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default Button;
