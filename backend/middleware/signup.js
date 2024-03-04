const zod = require('zod');

const bcrypt = require('bcrypt');
const { User } = require('../config/db');
const signupMiddleware = async (req, res, next) => {
    const objects = zod.object({
        firstName: zod.string(),
        lastName: zod.string(),
        username: zod.string().email(),
        password: zod.string().min(6)
    })
    const userData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: req.body.password
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    try {
        const validOrNot = objects.parse(userData);
        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            password: hashedPassword
        })
        next();
    }catch(error) {
        return res.status(400).send({message: 'Your are not in the given credientals'});
    }

}

module.exports = {
    signupMiddleware
}