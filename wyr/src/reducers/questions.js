import {ANSWER_QUESTION, NEW_QUESTION, RECEIVE_QUESTIONS} from '../actions/questions'

export default function questions (state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS :
            return {
                ...state,
                ...action.questions
            };
        case ANSWER_QUESTION :
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    [action.option]: {
                        ...state[action.id][action.option],
                        votes: state[action.id][action.option].votes.concat(action.authedUser),
                    }
                }
            };
        case NEW_QUESTION:
            return {
                ...state,
                [action.id]: {
                    id: action.id,
                    author: action.authedUser,
                    timestamp: (new Date()).getTime(),
                    optionOne: {
                        votes: [],
                        text: action.optionOne,
                    },
                    optionTwo: {
                        votes: [],
                        text: action.optionTwo,
                    }
                }
            };
        default :
            return state;
    }
}
