import React, { Component, Fragment } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { connect } from "react-redux"
import Nav from "./Nav"
import Login from "./Login";
import NewQuestion from "./NewQuestion";
import {handleInitialData} from "../actions/init";

class App extends Component {

    componentDidMount() {
        console.log("ok")
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <div className="container">
                        <Nav />
                        {
                            this.props.initialized
                            ? <div>
                                 <Route path="/" exact component={Login} />
                                 <Route path="/new" exact component={NewQuestion} />
                              </div>
                            : null
                        }
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps ({ users }) {
    console.log("heree ", users)
    return {
        initialized: !!users,
    }
}

export default connect(mapStateToProps)(App)