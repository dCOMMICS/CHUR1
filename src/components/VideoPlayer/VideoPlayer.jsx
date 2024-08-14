import React from 'react';
import './VideoPlayer.css';
import video from '../../assets/2249551-uhd_3840_2160_24fps.mp4';

const VideoPlayer = ({playState, setPlayState}) => {
  return (
    <div className= {`video-player`}>
      <video src={video} autoPlay muted controls ></video>
    </div>
  );
};

export default VideoPlayer;
