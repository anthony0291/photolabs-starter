import React, {useState, useReducer } from 'react';
import photos from '../mocks/photos';


export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

export const reducer = (state, action) => {
  console.log("**** incoming action: " + JSON.stringify(action));
  const chosen = photos.find(photo => photo.id === action.id);
  switch (action.type) {
  case ACTIONS.FAV_PHOTO_ADDED:
  case ACTIONS.FAV_PHOTO_REMOVED:
    useApplicationData.handleFavUpdate(action.id);
    return;
  case ACTIONS.SET_PHOTO_DATA:
    state.selectImages = {
      image: chosen.urls.regular,
      user: chosen.user,
      location: chosen.location,
      similarPhotos: chosen.similarPhotos,
    };
    return;
  case ACTIONS.DISPLAY_PHOTO_DETAILS:
    return;
  default:
    throw new Error(
      `Unsuported Action Type: ${action.type}`
    );
  }
};


export default function useApplicationData(props) {
  // const state = useState(true);

  const [modal, setModal] = useState(false);
  const [selectImages , setSelectImages] = useReducer(reducer, {});
  
    
  const [favoritesList, setFavPhotos] = useReducer(reducer, []);
  const [photosList, setPhotosList] = useReducer(reducer, []);
  
  const state = {favoritesList, photosList, modal, setModal, selectImages, setSelectImages };
  
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

  
  return {
    state,
    handleFavUpdate,
    setSelectedImage,
    handleClose,
  };

}

// export default function Application(props) {
//   const {
//     state,
//     onPhotoSelect,
//     updateToFavPhotoIds,
//     onLoadTopic,
//     onClosePhotoDetailsModal,
//   } = useApplicationData();

//   return (
//     // React components
//   );
// }