import '../styles/PhotoFavButton.scss';

import React from 'react';
import FavIcon from './FavIcon';


const PhotoFavButton = function(props) {
  const {
    handlerFavIcon,
    fill,
  } = props;

  return (
    <div className="photo-list__fav-icon" onClick={handlerFavIcon}>
      <FavIcon fill={fill}  />
    </div>
  );
};

export default PhotoFavButton;