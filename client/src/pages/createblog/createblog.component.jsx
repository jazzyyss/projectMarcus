import React, { useState } from 'react';
import './createblog.styles.scss';

import FormButton from '../../components/formButton/formbutton.component';
import Input from '../../components/input/input.component';
import postService from '../../services/blogservice';
import { toast } from 'react-toastify';

const CreateBlog = () => {
    const [blogContent, setBlogContent] = useState({ title: '', blog: '' });
    const [blogImages, setBlogImages] = useState({ blogImageOne: null, blogImageTwo: null, blogImageThree: null, blogImageFour: null, blogImageFive: null })
    const { title, blog } = blogContent;
    const handleChange = e => {
        const { value, name } = e.target;
        setBlogContent({
            ...blogContent,
            [name]: value
        })
    }
    const handleSubmit = async e => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('title', title);
        formData.append('blog', blog);
        formData.append('blogImage', blogImages.blogImageOne);
        formData.append('blogImage', blogImages.blogImageTwo);
        formData.append('blogImage', blogImages.blogImageThree);
        formData.append('blogImage', blogImages.blogImageFour);
        formData.append('blogImage', blogImages.blogImageFive);
        const res = await postService.createPost(formData);
        if (res.status === 200) {
            alert('You have blogged!');
            window.location = '/';
        } else {
            toast.error('something went wrong');
        }
    }
    const handleImages = e => {
        const { name } = e.target;
        setBlogImages({ ...blogImages, [name]: e.target.files[0] });
    }
    return (
        <div className="createblog">
            <form className="blogform" encType='multipart/form-data' onSubmit={handleSubmit}>
                <div className="leftside">
                    <textarea name="blog" value={blog} onChange={handleChange} placeholder="Enter your valuable thoughts..." required></textarea>
                    <FormButton type="submit" blogButton name="submit">Submit</FormButton>
                </div>
                <div className="rightside">
                    <div className="blogtitle">
                        <Input name="title" handleChange={handleChange} value={title} label="Title" required />
                    </div>
                    <div className="blogImages">
                        <div className="blogImagesHead">
                            Upload Images:
                        </div>
                        <div className="image imageone">
                            <input type="file" name='blogImageOne' accept="image/png, image/jpeg, image/jpg" onChange={handleImages} className="imageUploadInput" />
                        </div>
                        <div className="image imagetwo">
                            <input type="file" name='blogImageTwo' accept="image/png, image/jpeg, image/jpg" onChange={handleImages} className="imageUploadInput" />
                        </div>
                        <div className="image imagethree">
                            <input type="file" name='blogImageThree' accept="image/png, image/jpeg, image/jpg" onChange={handleImages} className="imageUploadInput" />
                        </div>
                        <div className="image imagefour">
                            <input type="file" name='blogImageFour' accept="image/png, image/jpeg, image/jpg" onChange={handleImages} className="imageUploadInput" />
                        </div>
                        <div className="image imagefive">
                            <input type="file" name='blogImageFive' accept="image/png, image/jpeg, image/jpg" onChange={handleImages} className="imageUploadInput" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreateBlog;