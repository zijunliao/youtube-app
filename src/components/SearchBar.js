import React from 'react';
import { youtubeVideo } from '../apis/youtube';

class SearchBar extends React.Component {
    state = { searchTerm: ''};

    // default search and results
    componentDidMount() {
        this.requestYoutube("Rav4 2020");
    }

    onInputChange = (evt) => {
        this.setState({ searchTerm: evt.target.value });
    }

    requestYoutube = async (search) => {
        const response = await youtubeVideo().get('/search', {
            params: {
                q: search
            }
        });

        this.props.responseFromYoutube(response);
    }

    onFormSubmit = async (evt) => {
        evt.preventDefault();
        this.requestYoutube(this.state.searchTerm);
        
    }

    render() {
        return (<div className="ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <input type="text" placeholder="Search" 
                    onChange={this.onInputChange} 
                    value = {this.state.searchTerm}
                    autoComplete="off"/>
                </div>
            </form>
        </div>)
    }
}

export default SearchBar;