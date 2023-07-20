import React from 'react';
import {useState} from 'react';
import FavIcon from '../components/FavIcon';
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoListItem from '../components/PhotoListItem';
import PhotoList from '../components/PhotoList';

import '../styles/PhotoDetailsModal.scss';
import '../styles/PhotoListItem.scss';





export  const PhotoDetailsModal = (props) => {

  
  console.log("incoming props: " + JSON.stringify(props));

  
  const imageList = Object.values(props.selectImages.similarPhotos);
  // console.log("%%%% image list: " + JSON.stringify(imageList));
  const currentImage = <img className='photo-details-modal__image' src={props.selectImages.image} />;
  // console.log("%%%% current Image: " + JSON.stringify(props.selectImages.image));
  
  const parsedImages = imageList.map((image) => {
    // console.log("@@@@@ similar image item: " + JSON.stringify(image));
    return [
      <PhotoListItem
        key={image.id}
      />
      // <FavIcon key={image.id}/>,
      // <img src={image.urls.regular} key={image.id} className="photo-details-modal_image" />,
    ];
  }
  );

  // console.log("$$$$ parsed Images: " + JSON.stringify(parsedImages));


  
  return (
    <div className='photo-details-modal'>
      <button className='photo-details-modal--close-button'
        onClick={props.handleClose}>
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
        {currentImage}

        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={props.selectImages.user.profile}/>
          <div className="photo-list_user-card">
            <p className="photo-list__user-info">{props.selectImages.user.name}</p>
            <p className="photo-list__user-location">{props.selectImages.location.city}, {props.selectImages.location.country}</p>
          </div>
        </div>

      </div>

      <h1 className="photo-details-modal__header">Related Photos</h1>
      
      <div className="photo-details-modal__top-bar" >
        
        <div className="photo-details-modal__images">
          <PhotoList
            photos={imageList}
            handleFavUpdate={props.handleFavUpdate}
            setModal={props.setModal}
            setSelectImages={props.setSelectImages}
            favoritesList={props.favoritesList}
            setFavPhotos={props.setFavPhotos}
            modal={props.modal}
          />
        </div>

      </div>

      
      
      
     
    </div>
  );
};

export default PhotoDetailsModal;

