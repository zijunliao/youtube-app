import React from 'react';
import "./VideoItem.css";

const VideoItem = (props) => {
    return (<div className="item">
        <div className="ui medium image" onClick={() => props.onSelectedVideo(props.video)}>
            <div className="video-list-items" key={props.video.id.videoId}>
                <img className="thumbnail-img" src={props.video.snippet.thumbnails.medium.url} alt={""}/>
                <div className="thumbnail-des">{props.video.snippet.title}</div>
            </div>
        </div>
    </div>)
}

export default VideoItem;