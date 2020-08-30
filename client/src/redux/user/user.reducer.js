import UserActionTypes from './user.types';
const INITIAL_STATE = {
    name: 'no-user'
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.ADD_USER:
            return {
                ...state,
                name: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;