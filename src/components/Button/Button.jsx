import React from 'react';
import { StyledButton } from './Styled';
import PropTypes from 'prop-types';
function Button({ handleLoadMore }) {
  return <StyledButton onClick={handleLoadMore}>ButtonLoadMore</StyledButton>;
}

Button.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};
export default Button;
