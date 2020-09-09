const express = require('express');
const router = express.Router();
const { Blog, validateBlog } = require('../models/blog');
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
    //validating using joi the length of title and blog
    const { error } = validateBlog(req.body.blogContent);
    if (error) return res.header(400).send(error.details[0].message);

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
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const validId = mongoose.Types.ObjectId.isValid(id);
    if (!validId) return res.json('invalid id provided');
    const blog = await Blog.find();
    const usersBlogged = blog.map(blog => blog.blogs);
    let blogToShow;
    let idOfBlogger;
    for (var i = 0; i < usersBlogged.length; i++) {
        usersBlogged[i].map(blog => {
            if (blog._id == id) {
                blogToShow = blog
                idOfBlogger = i;
            };
        })
    }
    idOfBlogger = blog[idOfBlogger].userid;
    res.send({ blog: blogToShow, bloggerId: idOfBlogger });
});
router.post('/comments', async (req, res) => {
    const { blogId, blogger, commentor, comment } = req.body;
    const blogs = await Blog.findOne({ userid: blogger });

    blogs.blogs.map(blog => {
        if ((blog._id).toString() == blogId) {
            blog.comments.push({ comment, commentor });
        }
    })
    await blogs.save();
    res.send('comment recieved')
})
module.exports = router;