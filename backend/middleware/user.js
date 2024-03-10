const { User } = require('../config/db');

const user = async (req, res, next) => {
    const userId = req.body.userId;
    const response = await User.findOne({ _id: userId});
    console.log(response);
    res.status(200).send({
        firstName: response['firstName'],
        lastName: response['lastName']
    })
}
module.exports = {
    user
}