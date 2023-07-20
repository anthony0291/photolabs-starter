import '../styles/PhotoListItem.scss';

import PhotoFavButton from './PhotoFavButton';
import React, { useState, useReducer } from 'react';

import PhotoDetailsModal from '../routes/PhotoDetailsModal';
import { reducer, ACTIONS, state } from '../hooks/useApplicationData';


const WHITE = '#EEEEEE';
const RED = '#FF0000';

const PhotoListItem = (props) => {
  const {
    id,
    location,
    urls,
    user,
    handleFavUpdate,
    setModal,
    setSelectImages,
    similarPhotos,
    favPhotos,
    setFavPhotos,
    favoritesList,
  } = props;


  const [state, dispatch] = useReducer(reducer, {});
  
  const [fill, setFill] = useState(favoritesList.includes(id) ? RED : WHITE);
  const [favorite, setFavorite] = useState(false);
  

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
    // if (prevFillColor === WHITE) {
    //   setFavorite(() => true);
    //   handleFavUpdate(id);

    // }
    // if (prevFillColor === RED) {
    //   setFavorite(() => false);
    //   handleFavUpdate(id);
    // }
  };
  

  const sendSelectImages = () => {
    setModal(true);
    setSelectImages({
      image: urls.regular,
      user: user,
      location: location,
      similarPhotos: similarPhotos,
    });
  };

 


  return (
    <li className="photo-list__item">
      <div className="photo-list__item">
        <PhotoFavButton
          favorite={favorite}
          handlerFavIcon={handlerFavIcon}
          favoritesList={favoritesList}
          fill={fill} />

        <img className="photo-list__image" src={urls.regular}
          onClick={() => dispatch({ type: ACTIONS.SET_PHOTO_DATA, id: id})} />
      </div>

      {/* {props.modal !== true && */}
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile}/>
        <div className="photo-list_user-card">
          <p className="photo-list__user-info">{user.name}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
      {/* } */}
    </li>
  );
};

 
export default PhotoListItem;


