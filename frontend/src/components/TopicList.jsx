import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';


const TopicList = (props) => {
  const {
    topics,
    setSelectTopics,
    favoritesList,
    setPhotos,
    basePhotos,
  } = props;

  const topicList = Object.values(topics);
  const parsedTopics = topicList.map((topic) => (
    < TopicListItem
      key={topic.id}
      id={topic.id}
      title={topic.title}
      setSelectTopics={setSelectTopics}
      favoritesList={favoritesList}
      setPhotos={setPhotos}
      basePhotos={basePhotos}
    />
  ));

  return (
    <div className="top-nav-bar__topic-list">
      {parsedTopics}
    </div>
  );
};


export default TopicList;