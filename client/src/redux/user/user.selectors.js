import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectShowUser = createSelector(
    [selectUser],
    user => user.name
)