import React, { Component, Fragment } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { connect } from "react-redux"
import Nav from "./Nav"
import Login from "./Login";
import NewQuestion from "./NewQuestion";
import {handleInitialData} from "../actions/init";
import LeaderBoard from "./LeaderBoard";
import Home from "./Home";

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <div className="container">
                        <Nav user={this.props.user}/>
                        {
                            this.props.initialized
                            ? <div>
                                    {
                                        this.props.user
                                            ? <Route path="/" exact component={Home} />
                                            : <Route path="/" exact component={Login} />
                                    }
                                 <Route path="/new" exact component={NewQuestion} />
                                 <Route path="/board" exact component={LeaderBoard} />
                              </div>
                            : null
                        }
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps ({ users, authedUser }) {
    return {
        initialized: !!users,
        user: authedUser ? users[authedUser] : null,
    }
}

export default connect(mapStateToProps)(App)