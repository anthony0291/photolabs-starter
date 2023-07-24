import {useState, useReducer, useEffect } from 'react';
import { reducer } from './reducers';
import axios from 'axios';

export default function useApplicationData() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    axios.get('/api/topics')
      .then(res => {
        setTopics([...res.data]);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    axios.get('/api/photos')
      .then(res => {
        setPhotos([...res.data]);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);


  //Modal State x
  // const [modal, setModal] = useReducer(reducer, false);
  const [modal, setModal] = useState(true);
  const [selectImages , setSelectImages] = useState({});
  const [favoritesList, setFavoriteList] = useReducer(reducer, []);

  
  const [badgeNav, setBadgeNav] = useState(0);
  const [ navFav, setNavFav ] = useState(false);
  const [photosList, setPhotosList] = useReducer(reducer, []);
  

  //HomeRoute
  const handleBadge = ()=> {
    if (badgeNav > 0) {
      setNavFav(true);
    }
    if (badgeNav === 0) {
      setNavFav(false);
    }
  };

  const handleClose = () => {
    console.log('modal handleClose');
    setModal(false);
  };

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

  
  const state = { topics, photos };

  return {
    state,

    modal,
    favoritesList,
    selectImages,
    
    handleFavUpdate,
    handleBadge,
    setSelectImages,
    setModal,
    handleClose,
  };
}