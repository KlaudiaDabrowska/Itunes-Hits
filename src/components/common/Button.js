import { StyledButton } from 'assets/styles/Button.styles';
import PropTypes from 'prop-types';

export const Button = ({ children, props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.element,
  props: PropTypes.node,
};
