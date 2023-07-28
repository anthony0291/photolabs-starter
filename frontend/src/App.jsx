import './App.scss';
import React from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';


const App = () => {
  const {
    state,
    modal,
    selectImages,
    favoritesList,
    toggleFavorites,
    setModal,
    setSelectImages,
    setToggleFavorites,
    setPhotos,
    setSelectTopics,
    handleFavUpdate,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        state={state}
        setSelectImages={setSelectImages}
        favoritesList={favoritesList}
        handleFavUpdate={handleFavUpdate}
        setSelectTopics={setSelectTopics}
        setModal={setModal}
        setPhotos={setPhotos}
        toggleFavorites={toggleFavorites}
        setToggleFavorites={setToggleFavorites}
      />
      {modal === true &&
      <PhotoDetailsModal
        setModal={setModal}
        selectImages={selectImages}
        setSelectImages={setSelectImages}
        handleFavUpdate={handleFavUpdate}
        favoritesList={favoritesList}
      />}
    </div>
  );
};

export default App;