import '../styles/PhotoListItem.scss';
import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import { ACTIONS } from '../hooks/reducers';


const PhotoListItem = (props) => {
  const {
    id,
    urls,
    user,
    location,
    similarPhotos,
    favoritesList,
    setModal,
    setSelectImages,
    handleFavUpdate,
  } = props;


  const handleSelectImages = () => {
    setModal({ type: ACTIONS.HANDLE_OPEN });
    setSelectImages({ type: ACTIONS.HANDLE_SELECT_PHOTOS, id:id, location:location, urls:urls, user:user, similarPhotos:similarPhotos });
  };

  return (
    <li className="photo-list__item">
      <div className="photo-list__item">
        <PhotoFavButton
          id={id}
          favoritesList={favoritesList}
          handleFavUpdate={handleFavUpdate}
        />
        <img className="photo-list__image" src={urls.regular} onClick={handleSelectImages}/>
      </div>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile}/>
        <div className="photo-list_user-card">
          <p className="photo-list__user-info">{user.name}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;


