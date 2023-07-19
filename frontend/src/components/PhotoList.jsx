import PhotoListItem from './PhotoListItem';
import React from 'react';

import '../styles/PhotoList.scss';


const PhotoList = (props) => {
  const { photoData, handleFavUpdate } = props;

 

  

  const photoList = Object.values(photoData);
  const parsedPhotos = photoList.map((photo) => (
    <PhotoListItem key={photo.id} {...photo} handleFavUpdate={handleFavUpdate} setModal={props.setModal} setSelectImages={props.setSelectImages} />
  ));

  return (
    <ul className="photo-list">
      {parsedPhotos}
    </ul>
  );

};



export default PhotoList;