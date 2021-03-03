import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

class Login extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <div>
                        Login { this.props.userIds.join(", ") }
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps ({ users }) {
    return {
        userIds: Object.keys(users).map((u) => users[u].id),
    }
}

export default connect(mapStateToProps)(Login)