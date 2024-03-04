const express = require('express');
const router = express.Router();
const app = express();
const  { signupMiddleware } = require('../middleware/signup');
const { signinMiddleware } = require('../middleware/signin');
const { gettingAllBlogs } = require('../middleware/blog');
router.post('/signup', signupMiddleware ,(req, res) => {
    res.status(200).send({message: 'signup successfully'});
});
router.post('/signin', signinMiddleware, (req, res) => {
    res.status(200).send({message: 'signin successfully'});
})
router.get('/blog', gettingAllBlogs ,(req, res) => {

    res.status(200).send({message: 'we are in blog page'});
})
module.exports = router; 