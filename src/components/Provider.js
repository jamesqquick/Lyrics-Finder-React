import React, { Component } from 'react';

const Context = React.createContext();

export default class Provider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            tracks: [],
            setLoading: loading => {
                this.setState({
                    loading
                });
            },
            setTracks: tracks => {
                this.setState({
                    tracks
                });
            }
        };
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
