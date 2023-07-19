import '../styles/PhotoListItem.scss';

import PhotoFavButton from './PhotoFavButton';
import React, { useState } from 'react';

import PhotoDetailsModal from '../routes/PhotoDetailsModal';


const WHITE = '#EEEEEE';
const RED = '#FF0000';

const PhotoListItem = (props) => {
  const {
    location,
    urls,
    user,
    handleFavUpdate,
    setModal,
    setSelectImages,
    similarPhotos,
  } = props;


  
  
  const [fill, setFill] = useState(WHITE);
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
    
    
    if (prevFillColor === WHITE) {
      setFavorite(() => true);
      handleFavUpdate(true);

    }
    if (prevFillColor === RED) {
      setFavorite(() => false);
      handleFavUpdate(false);
    }
  };
  
  
  const handleClick = () => {
    return (
      {PhotoDetailsModal}
    );
   
  };


  const sendSelectImages = () => {
    setModal(true);
    setSelectImages({
      image: urls.regular,
      similarPhotos: similarPhotos,
    });
  };

 


  return (
    <li className="photo-list__item">
      <PhotoFavButton
        favorite={favorite}
        handlerFavIcon={handlerFavIcon}
        fill={fill} />

      <img className="photo-list__image" src={urls.regular}
        onClick={sendSelectImages} />

      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile}/>
        <p className="photo-list__user-details">{user.name}</p>
        <p className="photo-list__user-location">{location.city}, {location.country}</p>
      </div>
    </li>
  );
};

 
export default PhotoListItem;


