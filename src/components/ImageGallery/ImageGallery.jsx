import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import { StyledImageGallery } from './Styled.js';
import PropTypes from 'prop-types';

function ImageGallery({ gallery, onClick }) {
  // console.log(gallery);
  // console.log(onClick);
  return (
    <StyledImageGallery>
      {gallery.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            smallImg={webformatURL}
            largeImg={largeImageURL}
            tags={tags}
            onClick={onClick}
          ></ImageGalleryItem>
        );
      })}
    </StyledImageGallery>
  );
}

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
