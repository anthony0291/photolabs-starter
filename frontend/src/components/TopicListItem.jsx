import React from 'react';
import '../styles/TopicListItem.scss';
import { ACTIONS } from '../hooks/reducers';
// import TopicList from './TopicList';

const TopicListItem = (props) => {
  const {
    title,
    id,
    setSelectTopics,
    favoritesList,
    setPhotos,
    basePhotos,
  } = props;

  // setSelectImages,
  // setModal,
  // id,


  // urls,
  // user,
  // location,
  // similarPhotos,
  
  // handleFavUpdate,
  // favoritesList,


  const handleSetTopicData = () => {
    setSelectTopics({ type: ACTIONS.SET_TOPIC_DATA, id:id, favoritesList:favoritesList });
  };





  return (
    <div className="topic-list__item">
      <span onClick={handleSetTopicData}>{title}</span>
    </div>
    
  );
};

export default TopicListItem;


