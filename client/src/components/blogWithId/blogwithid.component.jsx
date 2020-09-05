import React from 'react';
import './blogwithid.styles.scss';

const BlogWithId = (/* { blog } */) => {
    /* const convertToLocalTimeZone = (time) => {
        let h = parseInt(time.substring(0, 2));
        let m = parseInt(time.substring(3, 5));
        console.log(h);
        let count = 1;
        for (let i = 1; i <= 5; i++) {
            if (h <= 24) h = h + count;
            if (h > 24) h = 0 + count;
            if (i === 5) {
                console.log(h);
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
    } */

    return (
        <>
            <h1 className="blog-heading">blog.title</h1>
            <div className="creds">
                By: blog.name<br />E-mail: blog.email<br />on: date{/* {blog.date.slice(0, 10).split('-').reverse().join('-')} */}
                &nbsp;&nbsp;at: time{/* {convertToLocalTimeZone(blog.date.substring(11, 16))} */}
            </div>
            <div className="blog-content">blog.blog</div>

        </>
    );
}

export default BlogWithId;