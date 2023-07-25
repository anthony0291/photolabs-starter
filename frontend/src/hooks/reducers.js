import useApplicationData from "./useApplicationData";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  HANDLE_SELECT_PHOTOS: 'HANDLE_SELECT_PHOTOS',
  HANDLE_FAV_ICON: "HANDLE_FAV_ICON",
  HANDLE_OPEN: 'HANDLE_OPEN',
  HANDLE_CLOSE: 'HANDLE_CLOSE',


  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_FAV_PHOTOS: 'SET_FAV_PHOTOS',
  TOGGLE_FAV_OPEN: "TOGGLE_FAV_OPEN",
  TOGGLE_FAV_CLOSE: "TOGGLE_FAV_CLOSE",
};


export const reducer = function(state, action) {
  const WHITE = '#EEEEEE';
  const RED = '#FF0000';

  switch (action.type) {
  case ACTIONS.SET_FAV_PHOTOS:
  case ACTIONS.FAV_PHOTO_ADDED:
    return RED;
  case ACTIONS.FAV_PHOTO_REMOVED:
    return WHITE;
  case ACTIONS.HANDLE_SELECT_PHOTOS:
    return ({
      id : action.id,
      location: action.location,
      urls : action.urls,
      user: action.user,
      similarPhotos: action.similarPhotos,
    });
  case ACTIONS.HANDLE_OPEN:
    return true;
  case ACTIONS.HANDLE_CLOSE:
    return false;
  case ACTIONS.TOGGLE_FAV_OPEN:
    return true;
  case ACTIONS.TOGGLE_FAV_CLOSE:
    return false;
  case ACTIONS.SET_TOPIC_DATA:
    console.log(action);
    return action.id;


    // case ACTIONS.DISPLAY_PHOTO_DETAILS:
    //   return state;
    // case ACTIONS.SELECT_PHOTO:
    //   return state;

    // case SET

    // setToggleFavorites(true);
    // setPhotos(favoritePhotos);


 

  default:
    throw new Error(
      `Unsuported Action Type: ${action.type}`
    );
  }
};




