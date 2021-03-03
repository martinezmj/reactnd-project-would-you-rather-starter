import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'

export function handleInitialData () {
    console.log("ere")
    return (dispatch) => {
        return getInitialData()
            .then(({ users }) => {
                console.log("333")
                dispatch(receiveUsers(users))
            })
    }
}