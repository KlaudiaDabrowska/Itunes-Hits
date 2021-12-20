import styled from 'styled-components';
import { Close } from '@styled-icons/evaicons-solid/Close';
import { Link } from 'react-router-dom';

export const CloseIcon = styled(Close)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.2rem;
  color: ${({ theme }) => theme.colors.border};
`;

export const StyledButton = styled.button`
  padding: 7px 20px;
  margin: 15px 20px;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.textHover};

    ${CloseIcon} {
      color: ${({ theme }) => theme.colors.textHover};
    }
  }
`;

export const StyledLink = styled(Link)`
  align-self: flex-end;
`;
