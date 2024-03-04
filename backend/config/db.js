const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017');

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
})
const userSchema = new mongoose.Schema({
    firstName: String, 
    lastName: String,
    username: String,
    password: String,
    blogSchema: [blogSchema]
});

const User = mongoose.model('User', userSchema);
const Blog = mongoose.model('Blog', blogSchema);
module.exports = {
    User,
    Blog
}