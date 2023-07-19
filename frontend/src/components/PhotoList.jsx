import PhotoListItem from './PhotoListItem';
import React from 'react';

import '../styles/PhotoList.scss';


const PhotoList = (props) => {
  const {
    id,
    photos,
    handleFavUpdate,
    setModal,
    setSelectImages
  } = props;

 

  

  const photoList = Object.values(photos);
  const parsedPhotos = photoList.map((photo) => (
    <PhotoListItem
      key={id}
      {...photo}
      handleFavUpdate={handleFavUpdate}
      setModal={setModal}
      setSelectImages={setSelectImages}
    />
  ));

  return (
    <ul className="photo-list">
      {parsedPhotos}
    </ul>
  );

};



export default PhotoList;