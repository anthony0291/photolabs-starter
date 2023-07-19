import '../styles/FavBadge.scss';

import React, {useState} from 'react';
import FavIcon from './FavIcon';
import TopNavigation from './TopNavigationBar';





export const FavBadge = (props) => {

  

  return (
    <div className='fav-badge' onClick={props.handleBadge} >
      <FavIcon width={20} height={17} fill="#C80000" displayAlert={props.navFav}/>
    </div >
  );
};

export default FavBadge;


// return (
//   <div className='fav-badge' onClick={props.handleBadge} >
//     <FavIcon width={20} height={17} fill="#C80000" displayAlert={props.navFav}/>
//   </div >
// );
// };
