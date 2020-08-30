import UserActionTypes from './user.types';

export const showUser = _ => ({
    type: UserActionTypes.SHOW_USER
})

export const addUser = item => ({
    type: UserActionTypes.ADD_USER,
    payload: item
})