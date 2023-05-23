import React, { useState, useEffect } from 'react';

import { fetchImages, getPerPageQuantity } from 'services/api';
import { Container } from './App.styled';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import Loader from './Loader/Loader';

export default function App() {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState('');
  const [alt, setAlt] = useState('');
  const [totalHits, setTotalHits] = useState(null);

  useEffect(() => {
    if (query !== '' || currentPage > 1) {
      searchImages(query, currentPage);
    }
  }, [query, currentPage]);

  const handleFormSubmit = query => {
    setQuery(query);
    setCurrentPage(1);
    setGallery([]);
  };

  const toggleModal = () => {
    setShowModal(preShowModal => !preShowModal);
  };

  const handleImageClick = (largeImageURL, tags) => {
    setLargeImage(largeImageURL);
    setAlt(tags);
    toggleModal();
  };

  const handleLoadMore = () => {
    setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
  };

  // showLoadMoreButton = () => {
  //   if (this.state.totalHits / getPerPageQuantity() > this.state.currentPage) {
  //     return `Hooray! We found ${this.state.totalHits} images.`;
  //   }
  // };

  const searchImages = async (query, currentPage) => {
    setIsLoading(true);

    try {
      const data = await fetchImages(query, currentPage);

      setGallery(prevGallery => [...prevGallery, ...data.hits]);
      console.log(data.hits);
      setTotalHits(data.totalHits);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Searchbar onSubmit={handleFormSubmit}></Searchbar>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {query && !error && (
        <ImageGallery
          gallery={gallery}
          onClick={handleImageClick}
        ></ImageGallery>
      )}
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImage} alt={alt} />
        </Modal>
      )}
      {isLoading && <Loader></Loader>}
      {totalHits / getPerPageQuantity() > currentPage && gallery.length > 0 && (
        <Button handleLoadMore={handleLoadMore}></Button>
      )}
    </Container>
  );
}

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '33457552-f72b8f2d874a669f815eb264f';

// const fetchImages = async (query = '') => {
//   try {
//     const data = await axios.get(
//       `${BASE_URL}?${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//     );
//     console.log(data.data);
//     return data;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// fetchImages();

// -----------------------------------------------
// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '33457552-f72b8f2d874a669f815eb264f';

// const fetchImages = async () => {
//   try {
//     const response = await fetch(
//       `${BASE_URL}?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {}
// };

// -----------------------------------------------
// fetchImages();

// const fetchImages = () => {
//   return fetch(
//     `${BASE_URL}?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//   )
//     .then(response => response.json())
//     .catch(error => console.log(error));
// };
// fetchImages().then(data => console.log(data));
// -----------------------------------------------
