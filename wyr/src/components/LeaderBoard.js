import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import User from "./User";

class LeaderBoard extends Component {

    render() {
        return (
            <Fragment>
                <h2>Rankings</h2>
                {this.orderUsers().map((user) => (<User key={user.id} id={user.id}/>))}
            </Fragment>
        )
    }

    userRank(user) {
        const asked = user.questions.length;
        const answered = Object.keys(user.answers).length;
        return asked + answered;
    }

    orderUsers() {
        const users = Object.keys(this.props.users).map((uid) => this.props.users[uid]);
        return users.sort((a, b) => this.userRank(b) - this.userRank(a));
    }
}

function mapStateToProps({users}) {
    return {
        users,
    }
}

export default connect(mapStateToProps)(LeaderBoard)