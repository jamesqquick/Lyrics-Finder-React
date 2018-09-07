import React, { Component } from 'react';
import Axios from 'axios';
import { Consumer } from './Provider';
export default class Lyric extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lyrics: ''
        };
    }
    componentDidMount() {
        const {
            match: { params }
        } = this.props;
        console.log(params.trackId);

        const queryString = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
            params.trackId
        }&apikey=${process.env.REACT_APP_NM_KEY}`;

        Axios.get(queryString)
            .then(res => {
                console.log('lyrics', res);

                this.setState({
                    lyrics: res.data.message.body.lyrics.lyrics_body
                });
            })
            .catch(err => {
                console.error(err);
            });
    }

    render() {
        return (
            <Consumer>
                {value => {
                    return (
                        <div>
                            <p>{this.state.lyrics}</p>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}
