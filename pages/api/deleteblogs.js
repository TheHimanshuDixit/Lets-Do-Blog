// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Blog from '../../../models/blog';
import dbConnect from '../../../middleware/dbConnect';
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
        if (req.method == 'POST') {
            console.log(req.params)
            let blog = await Blog.findById(req.body._id);
            if (!blog) return res.status(404).json({ msg: 'Blog not found' });

            // Make sure user owns blog
            if (blog.user.toString() !== user) {
                return res.status(401).json({ msg: 'Not authorized' });
            }

            blog = await Blog.findByIdAndDelete(req.body._id);
            res.json({ msg: 'Blog removed' });
        }
    } catch (error) {
        res.status(400).json({ error: error });
    }
}

export default dbConnect(handler);
