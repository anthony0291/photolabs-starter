import '../styles/PhotoFavButton.scss';
import React, {useReducer} from 'react';
import FavIcon from './FavIcon';
import { reducer, ACTIONS } from '../hooks/reducers';


const PhotoFavButton = (props) => {
  const {
    id,
    handleFavUpdate,
    favoritesList
  } = props;
 
  const WHITE = '#EEEEEE';
  const RED = '#FF0000';
  const [fill, setFill] = useReducer(reducer, favoritesList.includes(id) ? RED : WHITE);

  const handleIcon = ()=> {
    if (fill === WHITE) {
      handleFavUpdate(id);
      setFill({type: ACTIONS.FAV_PHOTO_ADDED, id:id});
    } else if (fill === RED) {
      handleFavUpdate(id);
      setFill({type: ACTIONS.FAV_PHOTO_REMOVED, id:id});
    }
  };
  
  return (
    <div className="photo-list__fav-icon" onClick={handleIcon}>
      <FavIcon fill={fill} />
    </div>
  );
};

export default PhotoFavButton;