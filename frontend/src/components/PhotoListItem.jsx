import '../styles/PhotoListItem.scss';

import PhotoFavButton from './PhotoFavButton';
import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import ImageList from './ImageList';
import PhotoDetailsModal from '../routes/PhotoDetailsModal';


// import { useState } from 'react';
// import { ImageList } from '@mui/material';
// import React from 'react';
// import PhotoList from './PhotoList';
// import FavIcon from './FavIcon';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import PhotoList from './PhotoList';
// import PhotoListItem from './PhotoListItem';
// import photos from './photos';


const WHITE = '#EEEEEE';
const RED = '#FF0000';

const PhotoListItem = (props) => {
  const { location, urls, user, handleFavUpdate, setModal, setSelectImages, similarPhotos } = props;


  
  
  const [fill, setFill] = useState(WHITE);
  const [favorite, setFavorite] = useState(false);
  
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  

  const handlerFavIcon = () => {
    let prevFillColor = fill;
    
    setFill((prevFill) => {
      prevFillColor = prevFill;
      if (prevFill === WHITE) {
        return RED;
      }
      return WHITE;
    });
    
    
    if (prevFillColor === WHITE) {
      setFavorite(() => true);
      handleFavUpdate(true);

    }
    if (prevFillColor === RED) {
      setFavorite(() => false);
      handleFavUpdate(false);
    }
  };
  
  
  const handleClick = () => {
    return (
      {PhotoDetailsModal}
    );
   
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  

  const sendSelectImages = () => {
    setModal(true);
    // console.log(props);
    setSelectImages({
      image: urls.regular,
      similarPhotos: similarPhotos,
    });
  };

 


  return (
   
    <div>
      <li className="photo-list__item">
        <PhotoFavButton favorite={favorite} handlerFavIcon={handlerFavIcon} fill={fill} />
        <div className="photo-list__image" >
          <img className="photo-list__image" src={urls.regular} onClick={sendSelectImages} />
        </div>
        <div className="photo-list__user-info">
          <img className="photo-list__user-profile" src={user.profile}/>
          <p className="photo-list__user-details">{user.name}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </li>
    </div>
  );
};


// PhotoListItem.defaultProps = {
//   "id": "1",
//   "location": {
//     "city": "Montreal",
//     "country": "Canada"
//   },
//   "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   "username": "Jean Example",
//   "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
// };
 
export default PhotoListItem;


