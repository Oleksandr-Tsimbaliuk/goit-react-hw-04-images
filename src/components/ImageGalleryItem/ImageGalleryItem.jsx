import React from 'react';
import { StyledImageGalleryItem } from './Styled.js';
import PropTypes from 'prop-types';

function ImageGalleryItem({ smallImg, largeImg, tags, onClick }) {
  return (
    <StyledImageGalleryItem className="gallery-item">
      <img src={smallImg} alt={tags} onClick={() => onClick(largeImg, tags)} />
    </StyledImageGalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
