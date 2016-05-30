import React from 'react';

// props передается в дочерний элемент как аргумент функции
const VideoList = (props) =>{
  return(
    <div>
      <ul className="com-md-4 list-group">
        <li>{props.videos.length}</li>
      </ul>
    </div>
  );
};

export default VideoList;
