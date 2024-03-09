const express = require('express');
const router = express.Router();
const app = express();

const  { signupMiddleware } = require('../middleware/signup');
const { signinMiddleware } = require('../middleware/signin');
const { gettingUsersBlogs } = require('../middleware/blog');
const { addBlog } = require('../middleware/blog');
const { gettingAllBlogs } = require('../middleware/blog'); 
const { user } = require('../middleware/user');

router.post('/signup', signupMiddleware ,(req, res) => {
    res.status(200).send({message: 'signup successfully'});
});
router.post('/signin', signinMiddleware, (req, res) => {
    res.status(200).send({message: 'signin successfully'});
})
router.post('/addblog', addBlog ,(req, res) => {
    res.status(200).send({message: 'This is from addblog section'});
})
router.post('/blog', gettingUsersBlogs ,(req, res) => {
})
router.get('/allblogs',gettingAllBlogs ,(res, req) => {
})
router.post('/user', user,(req, res) => {
})
module.exports = router; 