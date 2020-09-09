import React, { Component } from 'react';
import './blogpage.styles.scss';
import CommentSection from '../../components/blogComments/blogcomments.component';
import BlogWithId from '../../components/blogWithId/blogwithid.component';
import blogservice from '../../services/blogservice';
import withSpinner from '../../components/with-spinner/with-spinner.component';

const BlogWithIdAndSpinner = withSpinner(BlogWithId);
const CommentSectionWithSpinner = withSpinner(CommentSection);

class BlogPage extends Component {
    state = {
        blogId: this.props.match.params.blogId,
        isLoading: true,
        blog: null,
        comments: null,
        bloggerId: null
    }
    async componentDidMount() {
        const { data } = await blogservice.getBlogWithId(this.state.blogId);
        if (!data) {
            return window.location = '/not-found'
        } else {
            this.setState({ blog: data.blog, bloggerId: data.bloggerId, isLoading: false });
        }
    }
    render() {
        return (
            <div className="blogpage">
                <BlogWithIdAndSpinner isLoading={this.state.isLoading} blogger={this.state.bloggerId} blog={this.state.blog} />
                <CommentSectionWithSpinner isLoading={this.state.isLoading} blogger={this.state.bloggerId} blog={this.state.blog} />
            </div>
        );
    }
}

export default BlogPage;