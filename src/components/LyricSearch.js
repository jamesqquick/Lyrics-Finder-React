import React, { Component } from 'react';
import { Consumer } from './Provider';
import axios from 'axios';
export default class LyricSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: ''
        };
    }
    render() {
        return (
            <Consumer>
                {value => (
                    <form
                        onSubmit={e => {
                            this.performSearch(
                                e,
                                value.setLoading,
                                value.setTracks
                            );
                        }}
                        className="form"
                    >
                        <h1 className="form-title">Search For a Song</h1>
                        <p className="form-subtitle">
                            Get the lyrics for any track
                        </p>
                        <input
                            type="text"
                            value={this.state.searchString}
                            placeholder="Song title..."
                            onChange={this.inputChange}
                            name="searchString"
                            className="form-control"
                        />
                        <button className="form-control">
                            Get Track Lyrics
                        </button>
                    </form>
                )}
            </Consumer>
        );
    }

    inputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            ...this.state,
            [name]: value
        });
    };

    performSearch = (e, setLoading, setTracks) => {
        e.preventDefault();
        setLoading(true);
        //TODO: call api and updated tracks
        console.log('performing search', this.state.searchString);

        const queryString = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${
            this.state.searchString
        }&page_size=10&page=1&s_track_rating=desc&apikey=${
            process.env.REACT_APP_NM_KEY
        }`;

        axios
            .get(queryString)
            .then(response => {
                console.log(response);
                setTracks(response.data.message.body.track_list);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    };
}
