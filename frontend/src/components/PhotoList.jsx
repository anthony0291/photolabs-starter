import PhotoListItem from './PhotoListItem';
import React from 'react';

import '../styles/PhotoList.scss';


const PhotoList = (props) => {
  const {
    id,
    photos,
    handleFavUpdate,
    setModal,
    setSelectImages,
    favPhotos,
    setFavPhotos,
    favoritesList,
  } = props;


  const photoList = Object.values(photos);
  const parsedPhotos = photoList.map((photo) => (
    <PhotoListItem
      key={id}
      {...photo}
      handleFavUpdate={handleFavUpdate}
      setModal={setModal}
      setSelectImages={setSelectImages}
      favPhotos={favPhotos}
      setFavPhotos={setFavPhotos}
      favoritesList={favoritesList}
      modal={props.modal}
    />
  ));

  return (
    <ul className="photo-list">
      {parsedPhotos}
    </ul>
  );

};



export default PhotoList;