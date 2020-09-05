import { createSelector } from 'reselect';

const selectBlog = state => state.blog;

export const isBlogFetching = createSelector(
    [selectBlog],
    blog => blog.isFetching
);

export const selectBlogsForPreview = createSelector(
    [selectBlog],
    blog => blog.blogs
)

export const isBlogsLoaded = createSelector(
    [selectBlog],
    blog => !!blog.blogs
)