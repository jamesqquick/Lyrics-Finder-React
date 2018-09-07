import React, { Component } from 'react';
import { Consumer } from './Provider';
import { withRouter } from 'react-router-dom';

class TrackListItem extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    return (
                        <div className="track-list-item">
                            <h4>{this.props.track.artist_name}</h4>
                            <p>Album: {this.props.track.album_name}</p>
                            <p>Title: {this.props.track.track_name}</p>
                            <button
                                onClick={() =>
                                    this.props.history.push(
                                        `/lyrics/${this.props.track.track_id}`
                                    )
                                }
                            >
                                View Lyrics
                            </button>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default withRouter(TrackListItem);
