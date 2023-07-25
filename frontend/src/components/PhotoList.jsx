import '../styles/PhotoList.scss';

import PhotoListItem from './PhotoListItem';
import React from 'react';


const PhotoList = (props) => {
  const {
    photos,

    handleFavUpdate,
    favoritesList,
    setSelectImages,
    setModal,
  } = props;


  const photoList = Object.values(photos);
  const parsedPhotos = photoList.map((photo) => (
    < PhotoListItem
      key={photo.id}
      id={photo.id}
      location={photo.location}
      urls={photo.urls}
      user={photo.user}
      similarPhotos={photo.similar_photos}
      handleFavUpdate={handleFavUpdate}
      favoritesList={favoritesList}
      setSelectImages={setSelectImages}
      setModal={setModal}
    />
  ));

  return (
    <ul className="photo-list">
      {parsedPhotos}
      
    </ul>
  );
};


export default PhotoList;