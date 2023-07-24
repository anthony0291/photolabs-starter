import '../styles/HomeRoute.scss';

import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';


const HomeRoute = (props) => {
  const {
    state,
    favoritesList,
    selectImages,
    
    handleFavUpdate,
    handleBadge,
    
    setSelectImages,
    setModal,
  } = props;

  return (
    <div className="home-route">
      < TopNavigationBar
        state={state}
        handleBadge={handleBadge}
        favoritesList={favoritesList}
      />
      <ul>

        < PhotoList
          state={state}
          favoritesList={favoritesList}
          selectImages={selectImages}
          handleFavUpdate={handleFavUpdate}
          setSelectImages={setSelectImages}
          setModal={setModal}
        />

      </ul>
    </div>
  );
};


export default HomeRoute;