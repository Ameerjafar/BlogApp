const { Blog } = require('../config/db');

const gettingAllBlogs = async (req, res, next) => {
    const userId = req.body.userId;
    const userBlogs = await Blog.findOne({
        userId: userId
    });
    res.status(200).send({message: userBlogs});
}
const addBlog = async (req, res, next) => {
    const userId = req.body.userId;
    const title = req.body.title;
    const content = req.body.content;
    const addblog = await Blog.create({
        userId: userId,
        title: title,
        content: content
    })
    res.status(200).send({message: "your blog is added successfully into the database"});
}
module.exports = {
    gettingAllBlogs,
    addBlog
}