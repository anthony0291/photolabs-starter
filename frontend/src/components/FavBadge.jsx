import '../styles/FavBadge.scss';

import React from 'react';
import FavIcon from './FavIcon';
import { ACTIONS } from '../hooks/reducers';
import { useState } from 'react';



export const FavBadge = (props) => {
  const { photos, setPhotos, basePhotos, favoritesList, toggleFavorites, setToggleFavorites, navFav } = props;

  // const [toggleFavorites, setToggleFavorites] = useState(false);

  const handleSetFavPhotos = () => {
    let favoritePhotos = [];
    photos.forEach(photo => {
      if (favoritesList.includes(photo.id)) {
        favoritePhotos[photo.id] = photo;
      }
    });
    if (toggleFavorites === true) {
      setPhotos(basePhotos);
      setToggleFavorites({type: ACTIONS.TOGGLE_FAV_CLOSE });
    } else {
      setToggleFavorites({type: ACTIONS.TOGGLE_FAV_OPEN });
      setPhotos(favoritePhotos);
    }
  };


  


  return (
    <div className='fav-badge' onClick={handleSetFavPhotos} >
      < FavIcon
        width={20}
        height={17}
        fill="#C80000"

        // not sure fix later with useReducer
        displayAlert={navFav}/>
    </div >
  );
};

export default FavBadge;
