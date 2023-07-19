import '../styles/PhotoFavButton.scss';

import React from 'react';
import FavIcon from './FavIcon';


const PhotoFavButton = function(props) {
  const {
    handlerFavIcon,
    fill,
  } = props;

  return (
    <div className="list__fav-icon-svg" onClick={handlerFavIcon}>
      <FavIcon fill={fill}  />
    </div>
  );
};

export default PhotoFavButton;