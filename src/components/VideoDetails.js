import React from 'react';

const VideoDetails = (props) => {
    if (!props.selectedVideo) {
        return <div>Loading...</div>
    } else {
        const { id, snippet } = props.selectedVideo;

        return (<div className="">

            <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${id.videoId}`}
                frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; 
            picture-in-picture" allowFullScreen title={snippet.title}></iframe>

            <div className="ui segment video-details" style={{marginTop: "0px"}}>
                <h4>{snippet.title}</h4>
                <p>{snippet.description}</p>
                {/* <p>{snippet.publishedAt}</p> */}
            </div>


        </div>)
    }
}

export default VideoDetails;