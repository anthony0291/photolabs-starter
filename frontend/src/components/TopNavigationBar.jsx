import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import { ACTIONS } from '../hooks/reducers';

import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {
  const {
    state,
    favoritesList,
    handleBadge,
    setSelectTopics,
    setPhotos,
    toggleFavorites,
    setToggleFavorites,
  } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={()=> setPhotos(state.basePhotos)}>PhotoLabs</span>
      < TopicList
        {...state}
        setSelectTopics={setSelectTopics}
        favoritesList={favoritesList}
        setPhotos={setPhotos}
        
      />
      < FavBadge
        {...state}
        favoritesList={favoritesList}
        handleBadge={handleBadge}
        setPhotos={setPhotos}
        toggleFavorites={toggleFavorites}
        setToggleFavorites={setToggleFavorites}
        
      />
    </div>
  );
};

export default TopNavigation;