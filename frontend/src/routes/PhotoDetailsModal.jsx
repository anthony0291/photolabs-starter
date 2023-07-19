import React from 'react';
import {useState} from 'react';
import ImageList from '../components/ImageList';
import PhotoList from '../components/PhotoList';
import PhotoListItem from '../components/PhotoListItem';
import FavIcon from '../components/FavIcon';


import '../styles/PhotoDetailsModal.scss';





export  const PhotoDetailsModal = (props) => {

  
  console.log(props);

  
  const imageList = Object.values(props.selectImages.similarPhotos);
  const currentImage = <img src={props.selectImages.image} />;
  
  const parsedImages = imageList.map((image) => {
    return [
      <FavIcon key={image.id}/>,
      <img src={image.urls.regular} key={image.id}  />,
    ];
  }
  );



  
  return (
    <div className='photo-details-modal'>
      <button className='photo-details-modal--close-button' onClick={props.handleClose}>
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

    
      <div className="photo-details-modal__image">
        {currentImage}
      </div>

      <h1 className="photo-details-modal__header">Similar Photos</h1>
      
      <div className="photo-details-modal__top-bar" >
        <div className="photo-details-modal__images">
          {parsedImages}
        </div>
      </div>

      
      
      
     
    </div>
  );
};

export default PhotoDetailsModal;

