
// import React from 'react';
import PhotoList from './PhotoList';
import PhotoFavButton from './PhotoFavButton';
import { useState } from 'react';
import FavIcon from './FavIcon';
import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import PhotoList from './PhotoList';
// import PhotoListItem from './PhotoListItem';


import '../styles/PhotoListItem.scss';


const PhotoListItem = (props) => {
  const {location, urls, user} = props;
  const [fill, setFill] = useState('#EEEEEE');
  const [favorite, setFavorite] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

 
  const handlerFavIcon = () => {
    setFill((prev) => {
      if (prev === "rgb(200, 0, 0)") {
        setFavorite(() => false);
        return '#EEEEEE';
      }
      if (prev === '#EEEEEE') {
        setFavorite(() => true);
        return "rgb(200, 0, 0)";
      }
    });
  };


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  const imgsrc = `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`;


  return (
    <div>
      <li className="photo-list__item">
        <PhotoFavButton favorite={favorite} handlerFavIcon={handlerFavIcon} fill={fill} />

        <div className="photo-list__image">
          <div aria-describedby={id} onClick={handleClick}>
            <img className="photo-list__image" src={urls.regular}/>
          </div>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'center',
              horizontal: 'center',
            }}>

            {/* Card */}
            <img src={imgsrc} onClick={handleClose}/>
          
          </Popover>
        
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


PhotoListItem.defaultProps = {
  "id": "1",
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  "username": "Jean Example",
  "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
};
 
export default PhotoListItem;


