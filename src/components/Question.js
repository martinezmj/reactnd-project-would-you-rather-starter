import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {answerQuestion} from "../actions/questions";
import {updateUserAnswer} from "../actions/users";
import {Redirect} from "react-router-dom";

class Question extends Component {

    answerChange(ev) {
        this.props.dispatch(answerQuestion(this.props.authedUser, this.props.id, ev.target.value));
        this.props.dispatch(updateUserAnswer(this.props.authedUser, this.props.id, ev.target.value));
    }

    answerCountTotal() {
        return this.answerOneCount() + this.answerTwoCount();
    }

    answerOneCount() {
        const {questions, id} = this.props;
        return questions[id].optionOne.votes.length;
    }

    answerTwoCount() {
        const {questions, id} = this.props;
        return questions[id].optionTwo.votes.length;
    }

    formatCount(val) {
        return Math.round(val * 100) + "%";
    }

    render() {
        const {questions, id, users} = this.props;
        if (!questions[id]) {
            return <Redirect to="/notfound"/>
        }

        return (
            <div style={{border: "2px black solid", background: "#ddd", margin: "14px 25px", padding: "8px"}}>
                {
                    !!this.props.user.answers[this.props.id]
                        ? (
                            <>
                                <div><img src={users[questions[id].author].avatarURL} alt="avatar"
                                          style={{width: "50px", height: "50px", float: "right"}}/></div>
                                <div>Asked by {users[questions[id].author].name}:</div>
                                <h2>Results</h2>
                                <h3>
                                    Would you rather {questions[id].optionOne.text}?
                                    &nbsp; &nbsp;
                                    {"(" + this.answerOneCount() + " of " + this.answerCountTotal() + " Answers)"}
                                    &nbsp; &nbsp;
                                    {this.formatCount(this.answerOneCount() / this.answerCountTotal())}
                                    &nbsp; &nbsp;
                                    {(this.props.user.answers[this.props.id] === "optionOne") && "<--- Your Answer"}
                                </h3>
                                <h3>
                                    Would you rather {questions[id].optionTwo.text}?
                                    &nbsp; &nbsp;
                                    {"(" + this.answerTwoCount() + " of " + this.answerCountTotal() + " Answers)"}
                                    &nbsp; &nbsp;
                                    {this.formatCount(this.answerTwoCount() / this.answerCountTotal())}
                                    &nbsp; &nbsp;
                                    {(this.props.user.answers[this.props.id] === "optionTwo") && "<--- Your Answer"}
                                </h3>
                            </>
                        )
                        : (
                            <>
                                <div><img src={users[questions[id].author].avatarURL} alt="avatar"
                                          style={{width: "50px", height: "50px", float: "right"}}/></div>
                                <div>{users[questions[id].author].name} asks:</div>
                                <h3>Would you rather...</h3>

                                <div>
                                    <input type="radio" id="optionOne" name="optionOne" value="optionOne"
                                           onChange={(ev) => this.answerChange(ev)}/>
                                    <label htmlFor="optionOne">{questions[id].optionOne.text}</label>
                                    <input type="radio" id="optionTwo" name="optionTwo" value="optionTwo"
                                           onChange={(ev) => this.answerChange(ev)}/>
                                    <label htmlFor="optionTwo">{questions[id].optionTwo.text}</label>
                                </div>
                            </>
                        )
                }
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, props) {
    const {id} = props.match.params;

    return {
        authedUser,
        user: users[authedUser],
        id,
        users,
        questions,
    }
}

export default connect(mapStateToProps)(Question)
