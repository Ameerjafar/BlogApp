import { Blog } from '../config/db'

const gettingAllBlogs = async (req, res, next) => {
    const userId = req.body.userId;
    const userBlogs = await Blog.findOne({
        userId: userId
    });
    res.status(200).send({message: userBlogs});
}
module.exports = {
   gettingAllBlogs
}