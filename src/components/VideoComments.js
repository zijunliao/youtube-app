import React from 'react';
import "./Comment.css";

class VideoComment extends React.Component {

    renderList() {
        if (this.props.comments) {
            const comments = this.props.comments;
            return (
                comments.map(c => {
                    return (<div className="item" key={c.id}>
                        <span className="comment-author">{c.snippet.topLevelComment.snippet.authorDisplayName}</span>
                        <div className="comment-text">{c.snippet.topLevelComment.snippet.textDisplay}</div>
                    </div>)
                })
            )
        } else {
            return <div>Loading...</div>
        }
    }

    render() {
        return <div className="ui relaxed divided list">{this.renderList()}</div>
    }
}

export default VideoComment;