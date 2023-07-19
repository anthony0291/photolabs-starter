import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';


const TopicList = (props) => {

  const topicList = Object.values(props.topicData);
  const parsedTopics = topicList.map((topic) => (
    <TopicListItem {...topic} key={topic.id} />
  ));



  return (
    <div className="top-nav-bar__topic-list">
      {parsedTopics}
    </div>
  );
};


export default TopicList;