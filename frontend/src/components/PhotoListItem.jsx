import '../styles/PhotoListItem.scss';

import PhotoFavButton from './PhotoFavButton';
import React, { useState, useReducer } from 'react';
import useApplicationData from '../hooks/useApplicationData';
import { reducer, ACTIONS } from '../hooks/reducers';
// import useApplicationData from '../hooks/useApplicationData';

// const defaultListItem = {
//   id: -1,
//   image: "",
//   user: "",
//   location: {},
//   similarPhotos: [],
// };

const WHITE = '#EEEEEE';
const RED = '#FF0000';
const PhotoListItem = (props) => {
  const {
    id,
    urls,
    profile,
    name,
    city,
    country,
    handleFavUpdate,
    favoritesList,
    similarPhotos,
    setSelectImages,

    //Temp?
    setModal,
    // selectImages,
  } = props;



  const [fill, setFill] = useState(favoritesList.includes(id) ? RED : WHITE);
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

  const activeListItem = {
    id: id,
    image: urls,
    name: name,
    profile: profile,
    city: city,
    country: country,
    similarPhotos: similarPhotos,
  };

  // PhotoListItem
  const listItemSelected = () => {
    setSelectImages(activeListItem);
    setModal(true);
  };

  return (
    <li className="photo-list__item">
      <div className="photo-list__item">
        < PhotoFavButton
          handlerFavIcon={handlerFavIcon} //here
          fill={fill}
        />

        < img className="photo-list__image" src={urls}
          onClick={listItemSelected} // here
        />

      </div>

      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile}/>
        <div className="photo-list_user-card">
          <p className="photo-list__user-info">{name}</p>
          <p className="photo-list__user-location">{city}, {country}</p>
        </div>
      </div>
    </li>
  );
};

 
export default PhotoListItem;


