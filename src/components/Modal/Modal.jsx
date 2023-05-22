import React, { useEffect } from 'react';
import { StyledOverlay } from './Styled';
import PropTypes from 'prop-types';

export default function Modal({ onClose, children }) {
  // componentDidMount() {
  //   window.addEventListener('keydown', this.handleKeyDown);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.handleKeyDown);
  // }
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <StyledOverlay onClick={handleOverlayClick}>
      <div className="Modal">{children}</div>
    </StyledOverlay>
  );
}

Modal.propTypes = {
  // onClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
