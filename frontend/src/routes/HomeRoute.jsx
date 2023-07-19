import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import {useState} from 'react';



import photos from '../mocks/photos';
import topics from '../mocks/topics';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const {
    setModal,
    setSelectImages,
  } = props;

  
  
  const [stillFav, setStillFav] = useState(0);
  const [ navFav, setNavFav ] = useState(false);
  

  



  const navBadge = () => {
    if (stillFav > 0) {
      setNavFav(true);
    }
    if (stillFav === 0) {
      setNavFav(false);
    }
  };


  const handleFavUpdate = (increment) => {
    navBadge();
    if (increment === true) {
      setStillFav((prev) => prev + 1);
    }
     
    if (increment === false)  {
      setStillFav((prev) => prev - 1);
    }
  };



  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics} navFav={navFav} />

      <ul>
        <PhotoList
          photos={photos}
          handleFavUpdate={handleFavUpdate}
          setModal={setModal}
          setSelectImages={setSelectImages} />
      </ul>
      
    </div>

  );

};

export default HomeRoute;