import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from "react-router-dom";

class QuestionListPreview extends Component {

    render() {
        return (
            <Link to={`/questions/${this.props.question.id}`}>
                <div style={{border: "2px black solid", background: "#ddd", margin: "14px 25px", padding: "8px"}}>
                    <span>{this.props.users[this.props.question.author].name} asks:</span>
                    <span>... {this.props.question.optionOne.text} ...</span>
                </div>
            </Link>

        )
    }
}

export default connect()(QuestionListPreview)
