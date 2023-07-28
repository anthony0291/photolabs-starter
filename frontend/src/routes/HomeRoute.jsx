import '../styles/HomeRoute.scss';

import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';


const HomeRoute = (props) => {
  const {
    handleBadge,
    state,

    setSelectTopics,
    favoritesList,
    handleFavUpdate,
    setSelectImages,
    setModal,
    setPhotos,
    toggleFavorites,
    setToggleFavorites,

  } = props;

  return (
    <div className="home-route">
      < TopNavigation
        state={state}
        handleBadge={handleBadge}
        favoritesList={favoritesList}
        setSelectTopics={setSelectTopics}
        setPhotos={setPhotos}
        toggleFavorites={toggleFavorites}
        setToggleFavorites={setToggleFavorites}
      />
      <ul>
        
        < PhotoList
          photos={state.photos}
          favoritesList={favoritesList}
          handleFavUpdate={handleFavUpdate}
          setSelectImages={setSelectImages}
          setModal={setModal}
        />
      </ul>
    </div>
  );
};


export default HomeRoute;