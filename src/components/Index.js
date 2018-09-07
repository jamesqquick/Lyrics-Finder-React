import React, { Component } from 'react';
import LyricSearch from './LyricSearch';
import TrackList from './TrackList';
import axios from 'axios';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: []
        };
    }
    render() {
        return (
            <div>
                <LyricSearch />
                <TrackList tracks={this.state.tracks} />
            </div>
        );
    }
}
