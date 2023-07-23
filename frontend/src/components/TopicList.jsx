import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';


const TopicList = ({topics}) => {

  const topicList = Object.values(topics);
  const parsedTopics = topicList.map((topic) => (
    <TopicListItem
      key={topic.id}
      id={topic.id}
      title={topic.title}
      // updatePhotosByTopic={updatePhotosByTopic}
    />
  ));

  return (
    <div className="top-nav-bar__topic-list">
      {parsedTopics}
    </div>
  );
};


export default TopicList;