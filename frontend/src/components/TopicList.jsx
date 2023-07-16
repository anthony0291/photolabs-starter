import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';


const TopicList = (props) => {


  const topicList = Object.values(props.topics);
  const parsedTopics = topicList.map((topic) => (
    <TopicListItem {...topic} key={topic.id} />
  ));

  // console.log(parsedTopics);


  return (
    <div className="top-nav-bar__topic-list">
      {parsedTopics}
    </div>
  );
};

TopicList.defaultProps = {
  topics: [
    {
      "id": "1",
      "slug": "topic-1",
      "title": "Nature"
    },
    {
      "id": "2",
      "slug": "topic-2",
      "title": "Travel"
    },
    {
      "id": "3",
      "slug": "topic-3",
      "title": "People"
    },
  ]
};
export default TopicList;