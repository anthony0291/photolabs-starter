import '../styles/HomeRoute.scss';

import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';


const HomeRoute = ({ state, setSelectImages, handleFavUpdate, setModal }) => {

  return (
    <div className="home-route">
      <TopNavigationBar state={state} />
      <ul>
        <PhotoList state={state} {...state} setSelectImages={setSelectImages} handleFavUpdate={handleFavUpdate} photos={state.photos} setModal={setModal} />
      </ul>
    </div>
  );
};


export default HomeRoute;