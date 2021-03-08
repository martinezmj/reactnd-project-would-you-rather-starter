import React, {Component, Fragment} from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {connect} from "react-redux"
import Nav from "./Nav"
import Login from "./Login";
import NewQuestion from "./NewQuestion";
import {handleInitialData} from "../actions/init";
import LeaderBoard from "./LeaderBoard";
import Home from "./Home";
import Question from "./Question";
import NotFound from "./NotFound";

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
                                    <Switch>
                                        {
                                            this.props.user
                                                ?
                                                <Switch>
                                                    <Route path="/" exact component={Home}/>
                                                    <Route path="/add" exact component={NewQuestion}/>
                                                    <Route path="/leaderboard" exact component={LeaderBoard}/>
                                                    <Route path="/questions/:id" exact component={Question}/>
                                                    <Route path="/notfound" exact component={NotFound}/>
                                                </Switch>
                                                : <Switch>
                                                    <Route path="/questions/" component={NotFound}/>
                                                    <Route path="/" component={Login}/>
                                                </Switch>
                                        }
                                    </Switch>
                                </div>
                                : null
                        }
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({users, authedUser}) {
    return {
        initialized: !!users,
        user: authedUser ? users[authedUser] : null,
    }
}

export default connect(mapStateToProps)(App)