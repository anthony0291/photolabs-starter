import '../styles/PhotoDetailsModal.scss';
import '../styles/PhotoListItem.scss';

import React from 'react';
import {useState} from 'react';
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoListItem from '../components/PhotoListItem';
import PhotoList from '../components/PhotoList';




export const PhotoDetailsModal = (props) => {
  const {
    state,
    setSelectImages,
    handleFavUpdate,
    setModal,
    selectImages,
    handleClose,
  } = props;

  const {
    id,
    name,
    image,
    profile,
    city,
    country,
    similarPhotos
  } = selectImages;

  console.log(similarPhotos);
  // const newSimilarPhotos = Object.values(similarPhotos);


  return (
    <div className='photo-details-modal'>
      <button className='photo-details-modal--close-button'
        onClick={handleClose}
      >
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>
    
      <div className="photo-details-modal__image_container">
        <img className='photo-details-modal__image' src={image} />
        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={profile}/>
          <div className="photo-list_user-card">
            <p className="photo-list__user-info">{name}</p>
            <p className="photo-list__user-location">{city}, {country}</p>
          </div>
        </div>
      </div>

      <h1 className="photo-details-modal__header">Related Photos</h1>
      <div className="photo-details-modal__top-bar" >
        <div className="photo-details-modal__images">
          
          
          {/*  */}


        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;

