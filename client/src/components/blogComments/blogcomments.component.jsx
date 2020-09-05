import React, { useState } from 'react';
import './blogcomments.styles.scss';
import FormButton from '../formButton/formbutton.component';

const CommentSection = _ => {
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
        /* const { name, email } = auth.getCurrentUser();
        try {
            const res = await http.post(apiUrl + 'comments', { blogId, name, email, comment })
            if (res.status === 200) toast.info('Comment added');
            if (res.status && res.status !== 200) toast.error('Something went wrong')
        } catch (err) {
            return err ? toast.error('Something went wrong') : null;
        }
        setCommentState({ comment: '' }) */
        console.log('commentSubmitted');
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
                    /* !comments ? null :
                        comments.comments.map(comment => ( */
                    <div key={comment._id} className="comment-container">
                        <h5>{comment.name}</h5>
                        <p className="comment">
                            {comment.comment}
                        </p>
                    </div>
                    /*  )) */
                }
            </div>
        </div>
    );
}

export default CommentSection;