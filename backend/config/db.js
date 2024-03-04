const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017');

const blogSchema = new mongoose.Schema({
    userId: String,
    title: String,
    content: String
})

const userSchema = new mongoose.Schema({
    firstName: String, 
    lastName: String,
    username: String,
    password: String,
});

const User = mongoose.model('User', userSchema);
const Blog = mongoose.model('Blog', blogSchema);
module.exports = {
    User,
    Blog
}