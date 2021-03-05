import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import QuestionList from "./QuestionList";

class Home extends Component {

    render() {
        return (
            <Fragment>
                <QuestionList user={this.props.user} questions={this.props.questions} />
            </Fragment>
        )
    }
}

function mapStateToProps ({ users, authedUser, questions }) {
    return {
        user:  users[authedUser],
        questions,
    }
}

export default connect(mapStateToProps)(Home)