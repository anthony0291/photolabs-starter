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

  const [photos, setPhotos] = useState([]);
  const [basePhotos, setBasePhotos] = useState([]);
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

  const [photosByTopicId, setSelectTopics] = useState([]);
  useEffect(()=>{
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

  const [ navFav, setNavFav ] = useState(false);
  useEffect(() => {}, [navFav]);


  const state = { topics, photos, basePhotos, navFav };
  const [modal, setModal] = useReducer(reducer, false);
  const [selectImages , setSelectImages] = useReducer(reducer, {});
  const [favoritesList, setFavoriteList] = useState([]);
  const [toggleFavorites, setToggleFavorites] = useReducer(reducer, false);


  const handleFavUpdate = (itemToUpdate) => {
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
  };

  return {
    state,
    modal,
    selectImages,
    favoritesList,
    toggleFavorites,
    setModal,
    setSelectImages,
    setToggleFavorites,
    setPhotos,
    setSelectTopics,
    handleFavUpdate,
  };
};

export default useApplicationData;