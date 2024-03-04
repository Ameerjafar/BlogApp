const express = require('express');
const router = express.Router();
const app = express();
const  { signupMiddleware } = require('../middleware/signup');
const { signinMiddleware } = require('../middleware/signin');
router.post('/signup', signupMiddleware ,(req, res) => {
    res.status(200).send({message: 'signup successfully'});
});
router.post('/signin', signinMiddleware, (req, res) => {
    res.status(200).send({message: 'signin successfully'});
})
router.post('/blog', (req, res) => {
    res.status(200).send({message: 'we are in blog page'});
})
module.exports = router; 