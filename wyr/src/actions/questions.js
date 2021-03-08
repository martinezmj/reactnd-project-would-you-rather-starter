export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const NEW_QUESTION = 'NEW_QUESTION'

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function answerQuestion (authedUser, id, option) {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        id,
        option,
    }
}

export function addQuestion(authedUser, id, optionOne, optionTwo) {
    return (dispatch) => {
        dispatch({
            type: NEW_QUESTION,
            authedUser,
            id,
            optionOne,
            optionTwo,
        });

        return Promise.resolve();
    }
}