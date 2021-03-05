import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class QuestionListPreview extends Component {

    render() {
        return (
            <div style={{border: "2px black solid", background: "#ddd", margin: "14px 25px", padding: "8px"}}>
                <span>{this.props.users[this.props.question.author].name} asks:</span>
                <span>... {this.props.question.optionOne.text} ...</span>
            </div>
        )
    }
}

export default connect()(QuestionListPreview)
