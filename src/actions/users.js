export const RECEIVE_USERS = "RECEIVE_USERS"
export const UPDATE_USER_ANSWER = "UPDATE_USER_ANSWER"
export const UPDATE_USER_QUESTION = "UPDATE_USER_QUESTION"

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function updateUserAnswer(authedUser, id, option) {
    return {
        type: UPDATE_USER_ANSWER,
        authedUser,
        id,
        option,
    }
}

export function updateUserQuestion(authedUser, qid) {
    return {
        type: UPDATE_USER_QUESTION,
        authedUser,
        qid,
    }
}
