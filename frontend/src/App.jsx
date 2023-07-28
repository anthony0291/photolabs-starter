import './App.scss';

import React from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';


const App = () => {
  const {
    modal,
    
    state,
    favoritesList,
    selectImages,
    setModal,
    handleFavUpdate,
    setSelectImages,
    setSelectTopics,
    setPhotos,

    toggleFavorites,
    setToggleFavorites,
    
    handleBadge,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        state={state}
        setSelectImages={setSelectImages}
        setModal={setModal}
        favoritesList={favoritesList}
        selectImages={selectImages}
        handleFavUpdate={handleFavUpdate}
        handleBadge={handleBadge}
        setSelectTopics={setSelectTopics}
        setPhotos={setPhotos}
        toggleFavorites={toggleFavorites}
        setToggleFavorites={setToggleFavorites}
      />

      {modal === true &&
      <PhotoDetailsModal
        handleFavUpdate={handleFavUpdate}
        favoritesList={favoritesList}
        setSelectImages={setSelectImages}
        selectImages={selectImages}
        setModal={setModal}
      />
      }
    </div>
  );
};

export default App;

// Fix CSS Cards
// Fix Hearts Populate Sync
// Fix Nav Badge Notification Sync

// Populate Page based on favourites
// Import Topics
// ReadMe