const bycrpt = require('bcrypt');
const zod = require('zod');
const { User } = require('../config/db');
const bcrypt = require('bcrypt');
const signinMiddleware = async (req, res, next) => {
    const objects = zod.object({
        password: zod.string().min(6)
    })
    const userData = {
        username: req.body.username,
        password: req.body.password
    }
    try {
        const validOrNot = objects.parse(userData);
        const user = await User.findOne({username: req.body.username});
        if (user) {
            const check =  await bcrypt.compare(userData.password, user.password);
            if(check) {
                res.status(200).send({message: user._id});
            }
        } else {
            res.status(401).send({ message: 'User not found' });
        }
    }catch(error) {
        return res.status(400).send({message: 'user not found'});
    }

}

module.exports = {
    signinMiddleware
}