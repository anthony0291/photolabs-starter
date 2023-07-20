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
  
  // const [favoritesList, setFavPhotos] = useState([]);
  



  const navBadge = () => {
    if (stillFav > 0) {
      setNavFav(true);
    }
    if (stillFav === 0) {
      setNavFav(false);
    }
  };


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

  // navBadge();
  // if (increment === true) {
  //   setStillFav((prev) => prev + 1);
  // }
   
  // if (increment === false)  {
  //   setStillFav((prev) => prev - 1);
  // }
  // };



  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics} navFav={navFav} favoritesList={props.favoritesList} />

      <ul>
        <PhotoList
          photos={photos}
          handleFavUpdate={props.handleFavUpdate}
          setModal={setModal}
          setSelectImages={setSelectImages}
          favoritesList={props.favoritesList}
          // setFavPhotos={props.setFavPhotos}
        />
      </ul>
      
    </div>

  );

};

export default HomeRoute;