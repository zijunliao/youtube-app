import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import VideoList from './components/VideoList';
import SearchBar from './components/SearchBar';
import VideoDetails from './components/VideoDetails';
import VideoComment from './components/VideoComments';


class App extends React.Component {
    state = { videos: [], selectedVideo: null, selectedVideoComment: null };

    async getCommentFromYoutube(){
        // comments
        // https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyDvHlNuUebwUeWHp8659NudTWfxW-TqIos&textFormat=plainText&part=snippet&videoId=kffacxfA7G4&maxResults=50
        const comments = await axios.get('https://www.googleapis.com/youtube/v3/commentThreads', {
            params: {
                key: "AIzaSyDmDwyBCoKrAuIxFhTanF-jOy2gL0jUImA",
                part: "snippet",
                videoId: this.state.selectedVideo.id.videoId,
                textFormat: "plainText",
                maxResults: 4
            }
        });

        this.setState({selectedVideoComment: comments.data});
    }

    responseFromYoutube = async ( response ) => {
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0]});

        console.log("@@@@@@!!!!", this.state.selectedVideo);
        this.getCommentFromYoutube();
        
    }

    onSelectedVideo = (selectedVideo) => {
        this.setState({ selectedVideo: selectedVideo});





    }

    render() {
        return (<div className="ui container" style={{ marginTop: "30px" }}>
            <SearchBar responseFromYoutube={this.responseFromYoutube} />
            <div>There are {this.state.videos.length} videos</div>
            <div className="ui grid">
                <div className="ten wide column">
                    <VideoDetails selectedVideo={this.state.selectedVideo}/>
                    <h4>Comments:</h4>
                    <VideoComment comments={this.state.selectedVideoComment} />
                </div>
                <div className="six wide column">
                    <VideoList videos={this.state.videos} onSelectedVideo={this.onSelectedVideo}/>
                </div>
            </div>
        </div>)
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)