import {useState, useReducer, useEffect } from 'react';
import { reducer } from './reducers';

import axios from 'axios';


const useApplicationData = () => {
 
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    axios.get('/api/topics')
      .then(res => {
        setTopics([...res.data]);
      })
      .catch((error)=>{
        console.error('Error:', error);
      });
  }, []);

  const [basePhotos, setBasePhotos] = useState([]);
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    axios.get('/api/photos')
      .then(res => {
        setPhotos([...res.data]);
        setBasePhotos([...res.data]);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  

  // ***************************************
  const [photosByTopicId, setSelectTopics] = useState([]);
  useEffect(()=>{
    console.log("Getting photos for topic: " + JSON.stringify(photosByTopicId));
    if (photosByTopicId.id >= 1) {
      axios.get('/api/topics/photos/' + photosByTopicId.id)
        .then(res => {
          setPhotos([...res.data]);
        })
        .catch((error)=>{
          console.error('Error:', error);
        });
    }
  }, [photosByTopicId]);
  // ***************************************
 
  // });

  const [ navFav, setNavFav ] = useState(false);
  const state = { topics, photos, basePhotos, navFav };
  const [modal, setModal] = useReducer(reducer, false);
  const [selectImages , setSelectImages] = useReducer(reducer, {});
  const [favoritesList, setFavoriteList] = useState([]);



  useEffect(() => {}, [navFav]);

  const handleFavUpdate = (itemToUpdate) => {
    console.log("**** Current Fav PhOtos: " + JSON.stringify(favoritesList));
    console.log("**** item to toggle: " + itemToUpdate);
    const indexToRemove = favoritesList.indexOf(itemToUpdate);
    if (indexToRemove > -1) {
      favoritesList.splice(indexToRemove, 1);
    } else {
      favoritesList.push(itemToUpdate);
    }
    if (favoritesList.length >= 1) {
      setNavFav(true);
    } else {
      setNavFav(false);
    }
    // setFavoriteList(favoritesList);
    console.log("**** Updated Fav Photos: " + JSON.stringify(favoritesList));
  };


  /////

  const [badgeNav, setBadgeNav] = useState(0);
  const [photosList, setPhotosList] = useReducer(reducer, []);
  const [toggleFavorites, setToggleFavorites] = useReducer(reducer, false);

  //HomeRoute
  const handleBadge = ()=> {
    if (badgeNav > 0) {
      setNavFav(true);
    }
    if (badgeNav === 0) {
      setNavFav(false);
    }
  };
  

  return {
    state,
    modal,
    favoritesList,
    selectImages,
    handleFavUpdate,
    setSelectImages,
    setModal,
    setPhotos,
    toggleFavorites,
    setToggleFavorites,

    setSelectTopics,
    handleBadge,
  };
};

export default useApplicationData;



//use topic_id to fetch photos when specific topic is clicked.

//TopicList or topic list item

// photos.topic_id