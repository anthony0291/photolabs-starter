import React from 'react';
import '../styles/TopicListItem.scss';
import TopicList from './TopicList';

const TopicListItem = (props) => {
  const { title} = props;

  return (
    <div className="topic-list__item">
      <span>{title}</span>
    </div>
    
  );
};

export default TopicListItem;


