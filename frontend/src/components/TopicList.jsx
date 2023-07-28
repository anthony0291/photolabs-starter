import '../styles/TopicList.scss';
import React from 'react';
import TopicListItem from './TopicListItem';


const TopicList = (props) => {
  const {
    topics,
    setSelectTopics,
    favoritesList,
  } = props;

  const topicList = Object.values(topics);
  const parsedTopics = topicList.map((topic) => (
    <TopicListItem
      key={topic.id}
      id={topic.id}
      title={topic.title}
      setSelectTopics={setSelectTopics}
      favoritesList={favoritesList}
    />
  ));

  return (
    <div className="top-nav-bar__topic-list">
      {parsedTopics}
    </div>
  );
};

export default TopicList;