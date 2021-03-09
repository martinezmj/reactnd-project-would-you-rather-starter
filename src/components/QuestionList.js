import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import QuestionListPreview from "./QuestionListPreview";

class QuestionList extends Component {

    state = {
        answered: false,
    }

    render() {
        return (
            <>
                <div>
                    <h2>{this.state.answered ? "Answered" : "Unanswered"}</h2>
                    {this.getQuestions().map((q) =>
                        (<QuestionListPreview users={this.props.users} key={q.id} question={q}/>))}
                </div>
                <div>
                    <input type="radio" id="answered" name="answered" value="answered" checked={this.state.answered}
                           onChange={(ev) => this.answerTypeChange(ev)}/>
                    <label htmlFor="answered">Answered</label>
                    <input type="radio" id="unanswered" name="unanswered" value="unanswered"
                           checked={!this.state.answered} onChange={(ev) => this.answerTypeChange(ev)}/>
                    <label htmlFor="unanswered">Unanswered</label>
                </div>
            </>
        )
    }

    getQuestions() {
        const ids = this.getQuestionsIds();
        const questions = ids.map((qid) => this.props.questions[qid]);
        return questions.sort((a, b) => b.timestamp - a.timestamp);
    }

    getQuestionsIds() {
        const answered = Object.keys(this.props.user.answers);
        if (this.state.answered) {
            return answered;
        } else {
            return Object.keys(this.props.questions).filter((q) => answered.indexOf(q) === -1);
        }
    }

    answerTypeChange(ev) {
        this.setState({answered: ev.target.value === "answered"});
    }
}

function mapStateToProps({users, questions}) {
    return {
        users,
        questions,
    }
}

export default connect(mapStateToProps)(QuestionList)
