import { StyledButton } from 'assets/styles/Button.styles';

export const Button = ({ children, props }) => {
  return <StyledButton {...props}> {children} </StyledButton>;
};
