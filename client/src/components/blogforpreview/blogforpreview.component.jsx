import React from 'react';
import { Link } from 'react-router-dom';

const BlogPreview = ({ _id, title, blog }) => {
    return (
        <Link to={`/blog/${_id}`}>
            <div className="blog">
                <div className="blogTitle">{title}</div>
                <div className="blogBody">{blog}</div>
                <div className="blogFoot">continue reading...</div>
            </div>
        </Link>
    );
}

export default BlogPreview;