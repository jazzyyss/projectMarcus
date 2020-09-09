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
            commentor: String,
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
    const schema = joi.object({
        title: joi.string().min(10).max(200).required(),
        blog: joi.string().min(50).required()
    });
    return schema.validate(data);
}
exports.Blog = Blog;
exports.validateBlog = validateBlog;