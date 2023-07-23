import '../styles/PhotoList.scss';

import PhotoListItem from './PhotoListItem';
import React from 'react';


const PhotoList = ({ state, photos, setSelectImages, setModal }) => {

  const photoList = Object.values(photos);
  const parsedPhotos = photoList.map((photo) => (
    <PhotoListItem
      key={photo.id}
      {...photo}
      {...state}
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