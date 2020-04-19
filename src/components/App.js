import React from 'react';
import youtube from "../apis/youtube";

import VideoList from './VideoList';
import SearchBar from './SearchBar';
import VideoDetails from './VideoDetails';
import VideoComment from './VideoComments';

class App extends React.Component {
    state = { videos: [], selectedVideo: null, selectedVideoComment: null };

    componentDidMount(){
        this.getVideoFromYoutube('Rav 4 2020');
    }

    // get video comment with parameters
     getCommentFromYoutube = async() => {
        // https://www.googleapis.com/youtube/v3/commentThreads?key=xxxxxxxxxx&textFormat=plainText&part=snippet&videoId=kffacxfA7G4&maxResults=50        
        const comments = await youtube.get('/commentThreads', {
            params: {
                videoId: this.state.selectedVideo.id.videoId,
                textFormat: "plainText",
                maxResults: 4
            }
        });
        
        this.setState({selectedVideoComment: comments.data.items});
    }

    // Get video list and set the 1st item as feature video
    getVideoFromYoutube = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
                maxResults: 5
            }
        });

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0]});
        this.getCommentFromYoutube();
    }

    onSelectedVideo = async (selectedVideo) => {
        // use callback function to make sure the state is mutated.
        this.setState({ selectedVideo: selectedVideo}, function(){
            this.getCommentFromYoutube();
        });


    }

    render() {
        return (<div className="ui container" style={{ marginTop: "30px" }}>
            <SearchBar getVideoFromYoutube={this.getVideoFromYoutube}/>
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

export default App;