const mongoose = require('mongoose');
const joi = require('joi');

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
const validateBlog = (data) => {
    const schema = {
        title: joi.string().min(10).max(200).required(),
        blog: joi.string().min(50).required()
    };
    return joi.validate(data, schema);
}
exports.Blog = Blog;
exports.validateBlog = validateBlog;