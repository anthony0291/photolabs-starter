import React from 'react';
import '../styles/TopicListItem.scss';
import TopicList from './TopicList';

const TopicListItem = (props) => {
  const {id, slug, title} = props;
  // console.log(props);

  return (
    <div className="topic-list__item">
      <span>{title}</span>
    </div>
  );
};

TopicListItem.defaultProps =   {
  "id": "1",
  "slug": "topic-1",
  "title": "Nature"
};

export default TopicListItem;


