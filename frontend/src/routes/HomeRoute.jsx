import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import {useState} from 'react';
import PhotoDetailsModal from './PhotoDetailsModal';


import photos from '../mocks/photos';
import topics from '../mocks/topics';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const topicData = topics;
  const photoData =  photos;
  
  
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
      <TopNavigationBar topicData={topicData} navFav={navFav} />

      <ul>
        <PhotoList photoData={photoData} handleFavUpdate={handleFavUpdate} setModal={props.setModal} setSelectImages={props.setSelectImages} />
      </ul>
      
    </div>

  );

};

export default HomeRoute;