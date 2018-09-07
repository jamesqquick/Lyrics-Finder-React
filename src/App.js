import React, { Component } from 'react';
import './App.css';
import Index from './components/Index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Lyric from './components/Lyric';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import Provider from './components/Provider';
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Provider>
                <Router>
                    <React.Fragment>
                        <Loader />
                        <Navbar />
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Index} />
                                <Route
                                    exact
                                    path="/lyrics/:trackId"
                                    component={Lyric}
                                />
                            </Switch>
                        </div>
                    </React.Fragment>
                </Router>
            </Provider>
        );
    }
}

export default App;
