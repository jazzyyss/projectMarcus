import React from 'react';
import './blogwithid.styles.scss';
import { API_PORT } from '../../config.json';

const BlogWithId = ({ blog, blogger }) => {

    const convertToLocalTimeZone = (time) => {
        let h = parseInt(time.substring(0, 2));
        let m = parseInt(time.substring(3, 5));
        let count = 1;
        for (let i = 1; i <= 5; i++) {
            if (h <= 24) h = h + count;
            if (h > 24) h = 0 + count;
            if (i === 5) {
            }
        }
        for (let i = 1; i <= 30; i++) {
            if (m <= 60) m = m + count;
            if (m > 60) m = 0 + count;
            if (i === 30) {
                if (m < 10) m = `0${m}`;
            }
        }
        return `${h}:${m}`
    }
    return (
        <>
            <h1 className="blog-heading">{blog.title}</h1>
            <div className="creds">
                By: {blogger}<br />on: {blog.date.slice(0, 10).split('-').reverse().join('-')}
                &nbsp;&nbsp;at: {convertToLocalTimeZone(blog.date.substring(11, 16))}
            </div>
            <div className="blog-content">{blog.blog}</div>
            <div className="blog-images">
                {blog.images.map(image =>
                    <div className="image" key={image._id}>
                        <img src={API_PORT + image.imagePath.replace(/\\/g, "/")} alt="" />
                    </div>
                )}
            </div>

        </>
    );
}

export default BlogWithId;