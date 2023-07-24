import './App.scss';

import React from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';


const App = () => {
  const {
    state,
    
    favoritesList,
    selectImages,
    modal,
    
    handleFavUpdate,
    handleBadge,
    handleClose,
    
    setModal,
    setSelectImages,
       
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute state={state} handleFavUpdate={handleFavUpdate} favoritesList={favoritesList} handleBadge={handleBadge}
        setSelectImages={setSelectImages} handleClose={handleClose} setModal={setModal} selectImages={selectImages}
      />
       
    

      {modal === true &&
      <PhotoDetailsModal state={state} handleFavUpdate={handleFavUpdate}
        setSelectImages={setSelectImages} selectImages={selectImages} setModal={setModal} handleClose={handleClose}
      />
      }
    </div>
  );
};

export default App;