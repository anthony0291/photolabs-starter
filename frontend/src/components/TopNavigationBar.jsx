import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';

import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {
  const {
    state,
    favoritesList,
    handleBadge,
  } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      < TopicList
        {...state}
      />
      < FavBadge
        {...state}
        favoritesList={favoritesList}
        handleBadge={handleBadge}
      />
    </div>
  );
};

export default TopNavigation;