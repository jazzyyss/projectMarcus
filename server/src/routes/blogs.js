const express = require('express');
const router = express.Router();
const { Blog } = require('../models/blog');
const upload = require('../middlewares/imageupload');
const mongoose = require('mongoose')

router.get('/', async (req, res) => {
    const blog = await Blog.find().sort([['date', -1]]).select("__id blogs");
    res.send(blog);
});

router.post('/createblog', upload.any('blogImage'), async (req, res) => {
    const userid = 'userid2';
    const title = req.body.title;
    const blog = req.body.blog;
    const blogImages = req.files;
    const idForBlog = mongoose.Types.ObjectId();
    console.log(idForBlog)
    //blogImages.forEach(img => console.log(img.path))
    /* console.log(blogImages.length);
    console.log("Request data---", title, blog);
    console.log("Request file ---", blogImages[0]); *///Here you get files.
    //console.log(req.headers);

    //checking if the user already has blogs
    const userHasBlogs = await Blog.findOne({ userid });

    if (userHasBlogs) {
        try {
            userHasBlogs.blogs.push({ _id: idForBlog, title, blog });
            if (blogImages.length > 0) {
                blogImages.forEach(imgPath => userHasBlogs.blogs.filter(arr => arr._id === idForBlog)[0].images.push({ imagePath: imgPath.path }));
            }
            await userHasBlogs.save();
            res.json("new blog has been added to the user")
        } catch (error) {
            res.json({ 'ERROR MESSAGE: ': error.message })
        }
    } else {
        try {
            let blogModel = new Blog({
                userid,
                blogs: {
                    _id: idForBlog,
                    title,
                    blog
                }
            });
            if (blogImages.length > 0) {
                blogImages.forEach(imgPath => blogModel.blogs.filter(arr => arr._id === idForBlog)[0].images.push({ imagePath: imgPath.path }));
            }
            await blogModel.save()
            res.json("uploaded successfully")
        } catch (error) {
            res.json({ 'ERROR MESSAGE: ': error.message })
        }
    }
})

module.exports = router;