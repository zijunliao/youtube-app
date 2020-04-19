import React from 'react';
import VideoItem from './VideoItem';


class VideoList extends React.Component {
    renderList() {
        return this.props.videos.map(v => <VideoItem key={v.id.videoId} video={v} onSelectedVideo={this.props.onSelectedVideo}/>)
    }

    render() {
        return <div className="ui relaxed divided list">{this.renderList()}</div>
    }
}

export default VideoList;

