import Blog from '../../models/blog';
import dbConnect from '../../middleware/dbConnect';
var jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

const handler = async (req, res) => {
    const token = req.headers['auth-token'];
    if (!token) {
        res.status(401).send({ "Error": "Please authenticate using a valid token" });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        const user = data.user.id;
        const blogs = await Blog.find({ user: user });
        res.status(200).json(blogs);
    } catch (error) {
        res.status(400).json({ error: error });
    }

}

export default dbConnect(handler);