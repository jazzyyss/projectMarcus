import React from 'react';
import './blog.styles.scss';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectBlogsForPreview } from '../../redux/blog/blog.selector';
import BlogPreview from '../blogforpreview/blogforpreview.component';

const Blog = ({ blogs }) => {
    return (<>
        {
            !blogs ? null : blogs.map(user =>
                user.blogs.map(data =>
                    <BlogPreview key={data._id} {...data} />
                )
            )
        }
    </>);
}
const mapStateToProps = createStructuredSelector({
    blogs: selectBlogsForPreview
})

export default connect(mapStateToProps)(Blog);