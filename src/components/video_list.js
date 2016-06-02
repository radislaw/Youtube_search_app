import React from 'react';
import VideoListItem from './video_list_item'

// props передается в дочерний элемент как аргумент функции
const VideoList = (props) => {
  // Когда React имеет дело со списками, ему необходим уникальный ключ-идентификатор
  // каждого элемента списка, для того чтобы можно было по нему обращаться при обновлении
  // информации key={video.etag}
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect = {props.onVideoSelect}
        key={video.etag}
        video={video} />)
  });

  return(
    <div>
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    </div>
  );
};

export default VideoList;
