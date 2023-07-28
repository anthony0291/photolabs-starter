import '../styles/TopicListItem.scss';
import React from 'react';
import { ACTIONS } from '../hooks/reducers';


const TopicListItem = (props) => {
  const {
    id,
    title,
    setSelectTopics,
    favoritesList,
  } = props;

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


