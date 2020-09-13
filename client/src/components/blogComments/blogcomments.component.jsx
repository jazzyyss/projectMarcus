import React, { useState } from 'react';
import './blogcomments.styles.scss';
import FormButton from '../formButton/formbutton.component';
import blogService from '../../services/blogservice';
import { toast } from 'react-toastify';

const CommentSection = ({ blog, blogger }) => {
    const [commentState, setCommentState] = useState({ comment: '' });
    const { comment } = commentState;

    const handleChange = e => {
        const { value, name } = e.target;
        setCommentState({
            ...comment,
            [name]: value
        });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        //const { name, email } = auth.getCurrentUser();
        const commentor = 'currentUser';
        const blogId = blog._id;
        try {
            const res = await blogService.postComment({ blogId, blogger, commentor, comment })
            console.log(res)
        } catch (err) {
            return err ? toast.error('Something went wrong') : null;
        }
        setCommentState({ comment: '' })
        window.location.reload()
    }

    return (
        <div className="blog-comment-section">
            <h3>Comments</h3>
            <form onSubmit={handleSubmit} className="blogpage-form">
                <textarea name="comment" value={comment} onChange={handleChange} placeholder="comment..." required></textarea>
                <FormButton commentButton type="submit" name="submit">Comment</FormButton>
            </form>
            <div className="comments">
                {
                    !blog.comments ? null :
                        blog.comments.map(c => (
                            <div key={c._id} className="comment-container">
                                <h5>{c.commentor}</h5>
                                <p className="comment">
                                    {c.comment}
                                </p>
                            </div>
                        ))
                }
            </div>
        </div >
    );
}

export default CommentSection;