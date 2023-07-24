import '../styles/PhotoList.scss';

import PhotoListItem from './PhotoListItem';
import React from 'react';


const PhotoList = (props) => {
  const {
    state,
    favoritesList,
    setSelectImages,
    setModal,
  } = props;

  const photoList = Object.values(state.photos);
  const parsedPhotos = photoList.map((photo) => (
    < PhotoListItem
      key={photo.id}
      id={photo.id}
      profile={photo.user.profile}
      name={photo.user.name}
      city={photo.location.city}
      country={photo.location.country}
      urls={photo.urls.regular}
      similarPhotos={photo.similar_photos}
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