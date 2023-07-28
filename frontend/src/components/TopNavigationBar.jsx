import '../styles/TopNavigationBar.scss';
import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';


const TopNavigation = (props) => {
  const {
    state,
    favoritesList,
    setSelectTopics,
    setPhotos,
    toggleFavorites,
    setToggleFavorites,
  } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={()=> setPhotos(state.basePhotos)}>PhotoLabs</span>
      <TopicList
        {...state}
        setSelectTopics={setSelectTopics}
        favoritesList={favoritesList}
      />
      <FavBadge
        {...state}
        setPhotos={setPhotos}
        favoritesList={favoritesList}
        toggleFavorites={toggleFavorites}
        setToggleFavorites={setToggleFavorites}
      />
    </div>
  );
};

export default TopNavigation;