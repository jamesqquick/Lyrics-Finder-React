import React, { Component } from 'react';
import { Consumer } from './Provider';
export default class Loader extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    return !!value.loading ? (
                        <div className="loader">
                            <p>Loading</p>
                        </div>
                    ) : (
                        ''
                    );
                }}
            </Consumer>
        );
    }
}
