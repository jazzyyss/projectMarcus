import blogActiontypes from './blog.types';
import postService from '../../services/blogservice';

export const fetchBlogsStart = _ => ({
    type: blogActiontypes.FETCH_BLOGS_START
});
export const fetchBlogsSuccess = blogsMap => ({
    type: blogActiontypes.FETCH_BLOGS_SUCCESS,
    payload: blogsMap
});
export const fetchBlogsFailure = errorMessage => ({
    type: blogActiontypes.FETCH_BLOGS_FAILURE,
    payload: errorMessage
});

export const fetchBlogsAsync = _ => {
    return async (dispatch) => {
        dispatch(fetchBlogsStart());
        try {
            const blogs = await postService.getAllBlogs();
            dispatch(fetchBlogsSuccess(blogs.data));
        } catch (err) {
            dispatch(fetchBlogsFailure(err.message));
        }
    }
}