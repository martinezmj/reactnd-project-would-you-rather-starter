import {_saveQuestion, _saveQuestionAnswer} from "../utils/_DATA";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const NEW_QUESTION = 'NEW_QUESTION'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function answerQuestion(authedUser, qid, answer) {
    return (dispatch) => {
        return _saveQuestionAnswer({authedUser, qid, answer}).then(() => {
            dispatch({
                type: ANSWER_QUESTION,
                authedUser,
                qid,
                answer,
            });
        });
    }
}

export function addQuestion(author, optionOneText, optionTwoText) {
    return (dispatch) => {
        return _saveQuestion({optionOneText, optionTwoText, author}).then((question) => {
            dispatch({
                type: NEW_QUESTION,
                question
            });

            return question;
        });
    }
}
