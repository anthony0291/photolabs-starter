import './App.scss';

import React, {useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';




const App = (props) => {
  
  // const [modal, setModal] = useState(false);
  // const [selectImages , setSelectImages] = useState({});

    
  // const [favoritesList, setFavPhotos] = useState([]);
  



  // const handleClose = () => setModal(false);

  // const handleFavUpdate = (itemToUpdate) => {
  //   console.log("**** Current Fav PhOtos: " + JSON.stringify(favoritesList));
  //   console.log("**** item to toggle: " + itemToUpdate);
  //   const indexToRemove = favoritesList.indexOf(itemToUpdate);
  //   if (indexToRemove > -1) {
  //     favoritesList.splice(indexToRemove, 1);
  //   } else {
  //     favoritesList.push(itemToUpdate);
  //   }

  //   console.log("**** Updated Fav Photos: " + JSON.stringify(favoritesList));
  // };

  const {
    state,
    setSelectImages,
    handleFavUpdate,
    onLoadTopic,
    handleClose,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        setModal={state.setModal}
        setSelectImages={state.setSelectImages}
        handleFavUpdate={handleFavUpdate}
        favoritesList={state.favoritesList}
      />
      {state.modal === true && <PhotoDetailsModal
        handleClose={handleClose}
        selectImages={state.selectImages}
        handleFavUpdate={handleFavUpdate}
        favoritesList={state.favoritesList}
        modal={state.modal}
      />}
    </div>
  );
};

export default App;