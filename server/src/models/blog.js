const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    userid: String,
    blogs: [new mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        blog: {
            type: String,
            required: true
        },
        comments: [new mongoose.Schema({
            comment: String,
            date: {
                type: Date,
                required: true,
                default: Date.now
            }
        })],
        images: [new mongoose.Schema({
            imagePath: String,
            date: {
                type: Date,
                required: true,
                default: Date.now
            }
        })],
        date: {
            type: Date,
            required: true,
            default: Date.now
        }
    })]
});

const Blog = mongoose.model('Blog', blogSchema);

exports.Blog = Blog;