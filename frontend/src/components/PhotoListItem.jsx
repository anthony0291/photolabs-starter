import '../styles/PhotoListItem.scss';

import PhotoFavButton from './PhotoFavButton';
import React, { useState, useReducer } from 'react';

import { reducer, ACTIONS } from '../hooks/reducers';

const defaultListItem = {
  id: -1,
  image: "",
  user: "",
  location: {},
  similarPhotos: [],
};

const WHITE = '#EEEEEE';
const RED = '#FF0000';

const PhotoListItem = (props) => {
  const {
    id,
    location,
    urls,
    user,
    setModal,
    handleFavUpdate,
    setSelectImages,
    similarPhotos,
    favoritesList,

  } = props;


  // const [state, dispatch] = useReducer(reducer, {});

  const [fill, setFill] = useState(favoritesList.includes(id) ? RED : WHITE);
  const [favorite, setFavorite] = useState(false);
  // const [selectListItem, dispatch] = useReducer(reducer, defaultListItem);

  const activeListItem = {
    id: id,
    image: urls.regular,
    user: user,
    location: location,
    similarPhotos: similarPhotos,
    setModal: setModal
  };
  
  const handlerFavIcon = () => {
    let prevFillColor = fill;
    setFill((prevFill) => {
      prevFillColor = prevFill;
      if (prevFill === WHITE) {
        return RED;
      }
      return WHITE;
    });
    handleFavUpdate(id);
  };

  


  // const listItemSelected = (listItem) => {
  //   dispatch({ type: 'SET_PHOTO_DATA', info: listItem });
  //   dispatch({ type: 'DISPLAY_PHOTO_DETAILS', info: listItem });
  // };
  //?

  const sendSelectImages = () => {
    setModal(true);
    setSelectImages({
      image: urls.regular,
      user: user,
      location: location,
      similarPhotos: similarPhotos,
    });
  };

  // PhotoListItem
  const listItemSelected = () => {
    setSelectImages({type: ACTIONS.SET_PHOTO_DATA, info: activeListItem});
    setModal({type: ACTIONS.DISPLAY_PHOTO_DETAILS, info: true });
  };

  return (
    <li className="photo-list__item">
      <div className="photo-list__item">
        <PhotoFavButton
          handlerFavIcon={handlerFavIcon}
          fill={fill}
        />

        <img className="photo-list__image" src={urls.regular}
          onClick={listItemSelected}
        />
        
      </div>

      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile}/>
        <div className="photo-list_user-card">
          <p className="photo-list__user-info">{user.name}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </li>
  );
};

 
export default PhotoListItem;


