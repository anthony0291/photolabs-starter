import './App.scss';

// import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import TopicListItem from './components/TopicListItem';
import TopNavigationBar from './components/TopNavigationBar';
import TopicList from './components/TopicList';
import HomeRoute from './routes/HomeRoute';
import {useState} from 'react';
import PhotoFavButton from './components/PhotoFavButton';
import FavIcon from './components/FavIcon';
import BasicCard from './components/BasicCard';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { Popover } from '@mui/material';
import Popover from './components/Popover';


const App = () => {
  const [favPhotos, setFavPhotos] = useState('false');



  const isFavPhotoExist = () =>{
  
  };

  

  //if favourite button is on, display favourite photos
  //repopulate PhotoList Item
  //else dont display favourite photos
  //needs to be used by both favebage and photolist

  //PhotoList
  //needs to know which photos are favourited to render

  return (
    <div className="App">
      <>
        {/* <HomeRoute /> */}
        <TopNavigationBar/>
        {/* <TopicListItem /> */}
        <TopicList />
        {/* <Popover/> */}
        <ul>
          
          <PhotoList />

          {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
          {/* <PhotoListItem /> */}
          {/* <PhotoListItem /> */}
        </ul>
      </>
    </div>
  );
};

export default App;