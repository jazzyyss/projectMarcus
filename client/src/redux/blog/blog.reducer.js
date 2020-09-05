import blogActiontypes from './blog.types';
const INITIAL_STATE = {
    blogs: null,
    isFetching: false,
    errorMessage: undefined
};

const blogReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case blogActiontypes.FETCH_BLOGS_START:
            return {
                ...state,
                isFetching: true
            }
        case blogActiontypes.FETCH_BLOGS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                blogs: action.payload
            }
        case blogActiontypes.FETCH_BLOGS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
};
export default blogReducer;