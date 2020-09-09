import http from './httpservice';
import { API_ENDPOINT } from '../config.json';

const createPost = async data => {
    const config = {
        headers: { 'content-type': undefined }
    };
    const res = await http.post(`${API_ENDPOINT}/blog/createblog`, data, config);
    return res;
}
const getAllBlogs = async _ => {
    const res = await http.get(API_ENDPOINT + '/blog');
    return res;
}
const getBlogWithId = async id => {
    const res = await http.get(`${API_ENDPOINT}/blog/${id}`);
    return res;
}
const postComment = async data => {
    console.log(data);
    const res = await http.post(`${API_ENDPOINT}/blog/comments`, data);
    return res;
}

export default {
    createPost,
    getAllBlogs,
    getBlogWithId,
    postComment
}