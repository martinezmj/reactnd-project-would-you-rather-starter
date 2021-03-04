import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {loginAuthedUser} from "../actions/authedUser";

class Login extends Component {

    state = {
        selected: 0,
    }

    render() {
        return (
            <Fragment>
                <h2>Login</h2>
                <div>
                    <select
                        onChange={(ev) => this.userSelected(ev)}
                        value={this.state.selected}>
                        {
                            this.props.userIds.map((u, i) => (<option key={u} value={i}>{u}</option>))
                        }
                    </select>
                </div>
                <button onClick={() => this.onSignIn()}>Sign In</button>
            </Fragment>
        )
    }

    userSelected(ev) {
        this.setState({selected: ev.target.value});
    }

    onSignIn() {
        this.props.dispatch(loginAuthedUser(this.props.userIds[this.state.selected]))
    }
}

function mapStateToProps ({ users }) {
    return {
        userIds: Object.keys(users).map((u) => users[u].id),
    }
}

export default connect(mapStateToProps)(Login)