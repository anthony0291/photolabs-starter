import useApplicationData from "./useApplicationData";

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
  console.log("**** incoming state: " + JSON.stringify(state));
  // const chosen = photos.find(photo => photo.id === action.info.id);
  switch (action.type) {
  case ACTIONS.FAV_PHOTO_ADDED:
  case ACTIONS.FAV_PHOTO_REMOVED:
    useApplicationData.handleFavUpdate(action.id);
    return state;
  case ACTIONS.SET_PHOTO_DATA:
    // console.log("***** set image data from chosen image: " + JSON.stringify(chosen));
    state.selectImages = {
      image: action.info.image,
      user: action.info.user,
      location: action.info.location,
      // similarPhotos: chosen.similarPhotos,
    };
    console.log("****** activate modal state");

    return state;
  case ACTIONS.DISPLAY_PHOTO_DETAILS:
    // useApplicationData.state.photoList = Object.values(action.info.similarPhotos);
    // state.setModal(true);
    state.setModal(true);
    // console.log("🚀🚀🚀 ~ file: reducers.js:34 ~ reducer ~ state: 🚀🚀🚀", state);
    return state;
  default:
    throw new Error(
      `Unsuported Action Type: ${action.type}`
    );
  }
};




