import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addQuestion} from "../actions/questions";
import {withRouter} from "react-router-dom";
import {updateUserQuestion} from "../actions/users";

class NewQuestion extends Component {

    state = {
        optionOne: "",
        optionTwo: "",
    }

    onChange1(ev) {
        const optionOne = ev.target.value
        this.setState(() => ({optionOne}))
    }

    onChange2(ev) {
        const optionTwo = ev.target.value
        this.setState(() => ({optionTwo}))
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.dispatch(addQuestion(this.props.user, this.state.optionOne, this.state.optionTwo)).then((question) => {
            this.props.dispatch(updateUserQuestion(this.props.user, question.id));
            this.props.history.push("/");
        });
    }

    render() {
        return (
            <div>
                <h2>Would you rather...</h2>
                <form className='new-tweet' onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        id="optionOne"
                        name="optionOne"
                        placeholder={"First option"}
                        value={this.state.optionOne}
                        onChange={(ev) => this.onChange1(ev)}
                    />
                    &nbsp;
                    <input
                        type="text"
                        id="optionTwo"
                        name="optionTwo"
                        placeholder={"Second option"}
                        value={this.state.optionTwo}
                        onChange={(ev) => this.onChange2(ev)}
                    />
                    &nbsp;
                    <button disabled={!this.state.optionOne || !this.state.optionTwo} type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        user: authedUser,
    }
}

export default withRouter(connect(mapStateToProps)(NewQuestion))