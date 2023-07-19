import '../styles/PhotoFavButton.scss';

import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';



const PhotoFavButton = function(props) {

  return (
    <div className="list__fav-icon-svg" onClick={props.handlerFavIcon}>
      <FavIcon fill={props.fill}  />
    </div>
  );
};

export default PhotoFavButton;