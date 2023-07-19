import './App.scss';

import React, {useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';




const App = () => {
  
  const [modal, setModal] = useState(false);
  const [selectImages , setSelectImages] = useState({});


  const handleClose = () => setModal(false);

  return (
    <div className="App">
      <HomeRoute setModal={setModal} setSelectImages={setSelectImages}/>
      {modal === true && <PhotoDetailsModal handleClose={handleClose} selectImages={selectImages} />}
    </div>
  );
};

export default App;