import {useState, useReducer, useEffect } from 'react';
import { reducer } from './reducers';

// import photos from '../mocks/photos';
// import topics from '../mocks/topics';
import axios from 'axios';

export default function useApplicationData() {

  const [topics, setTopics] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8001/api/topics')
      .then(res => {
        // console.log("%%%%%%TOPICS: res. data:" + JSON.stringify(...res.data));
        setTopics([...res.data]);

      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);





  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8001/api/photos')
      .then(res => {
        console.log("%%%%%%PHOTOS: res. data:" + JSON.stringify(...res.data));
        setPhotos([...res.data]);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  //Modal State x
  // const [modal, setModal] = useReducer(reducer, false);
  const [modal, setModal] = useState(false);

  //Store Images for Modal x
  const [selectImages , setSelectImages] = useReducer(reducer, {});

  //List of favorite Photo-Ids n
  const [favoritesList, setFavoriteList] = useReducer(reducer, []);

  //Store Simlar Photos or Baselist x
  const [photosList, setPhotosList] = useReducer(reducer, []);

  //HomeRoute
  const [ navFav, setNavFav ] = useState(false);
  const [badgeNav, setBadgeNav] = useState(0);

  //HomeRoute
  const navBadge = () => {
    if (badgeNav > 0) {
      setNavFav(true);
    }
    if (badgeNav === 0) {
      setNavFav(false);
    }
  };
  

  //useApplication
  // const [selectImages , setSelectImages] = useReducer(reducer, {});
  // const [modal, setModal] =


  const handleClose = () => setModal(false);

  const handleFavUpdate = (itemToUpdate) => {
    console.log("**** Current Fav PhOtos: " + JSON.stringify(favoritesList));
    console.log("**** item to toggle: " + itemToUpdate);
    const indexToRemove = favoritesList.indexOf(itemToUpdate);
    if (indexToRemove > -1) {
      favoritesList.splice(indexToRemove, 1);
    } else {
      favoritesList.push(itemToUpdate);
    }
    console.log("**** Updated Fav Photos: " + JSON.stringify(favoritesList));
  };

  const setSelectedImage = (imageChosen) => {
    const chosen = photos.find(photo => photo.id === imageChosen.id);
    state.selectImages = {
      image: chosen.urls.regular,
      user: chosen.user,
      location: chosen.location,
      similarPhotos: chosen.similarPhotos,
    };
  };

  const state = {
    modal,
    // setModal,
    selectImages,
    // setSelectImages,
    favoritesList, setFavoriteList,
    photosList, setPhotosList,
    badgeNav, setBadgeNav,
    navFav, setNavFav,
  
    handleClose,
    handleFavUpdate,
    // setSelectedImage,
    navBadge,

    topics,
    photos,
  };

  return {
    state,

    setModal,
    setSelectImages,
    handleFavUpdate
  };
  
  // handleFavUpdate,
  // setSelectedImage,
  // handleClose,
}