import React, { Component } from 'react';
import TrackListItem from './TrackListItem';
import { Consumer } from './Provider';

export default class TrackList extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    console.log(value);
                    return (
                        <div className="track-list">
                            {value.tracks.map((track, index) => {
                                return (
                                    <TrackListItem
                                        track={track.track}
                                        key={index}
                                    />
                                );
                            })}
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}
