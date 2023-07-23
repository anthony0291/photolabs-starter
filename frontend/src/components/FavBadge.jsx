import '../styles/FavBadge.scss';

import React from 'react';
import FavIcon from './FavIcon';



export const FavBadge = ({ handleBadge, favoritesList }) => {

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

