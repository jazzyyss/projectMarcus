import React from 'react';
import './blogpage.styles.scss';
import CommentSection from '../../components/blogComments/blogcomments.component';
import BlogWithId from '../../components/blogWithId/blogwithid.component';

const BlogPage = _ => {
    return (
        <div className="blogpage">
            <BlogWithId />
            <CommentSection />
        </div>
    );
}

export default BlogPage;