import './App.scss';

import React from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';


const App = () => {
  const { state, handleFavUpdate, setSelectImages, setModal } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute state={ state }{...state} setSelectImages={setSelectImages} handleFavUpdate={handleFavUpdate} />
       
      {state.modal === true &&
      <PhotoDetailsModal state={ state }{...state} setSelectImages={setSelectImages} handleFavUpdate={handleFavUpdate} setModal={setModal} /> }
    </div>
  );
};

export default App;