import React from 'react';

class SearchBar extends React.Component {
    state = { searchTerm: ''};

    onInputChange = (evt) => {
        this.setState({ searchTerm: evt.target.value });
    }

    onFormSubmit = async (evt) => {
        evt.preventDefault();
        this.props.getVideoFromYoutube(this.state.searchTerm);
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