import '../styles/FavBadge.scss';

import React, {useState} from 'react';
import FavIcon from './FavIcon';
import TopNavigation from './TopNavigationBar';





export const FavBadge = (props) => {
  const {
    handleBadge,
    navFav,
    favoritesList,
  } = props;



  return (
    <div className='fav-badge' onClick={handleBadge} >
      <FavIcon
        width={20}
        height={17}
        fill="#C80000"
        displayAlert={favoritesList.length >= 1}/>
    </div >
  );
};

export default FavBadge;

