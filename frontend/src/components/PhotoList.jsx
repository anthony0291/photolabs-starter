import '../styles/PhotoList.scss';
import React from 'react';
import PhotoListItem from './PhotoListItem';


const PhotoList = (props) => {
  const {
    photos,
    favoritesList,
    setSelectImages,
    setModal,
    handleFavUpdate,
  } = props;


  const photoList = Object.values(photos);
  const parsedPhotos = photoList.map((photo) => (
    <PhotoListItem
      key={photo.id}
      id={photo.id}
      urls={photo.urls}
      user={photo.user}
      location={photo.location}
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