// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
        if (req.method == 'PUT') {
            const { id, title, slug, desc, image, author, metadata } = req.body;
            const newBlog = {};
            if (title) newBlog.title = title;
            if (slug) newBlog.slug = slug;
            if (desc) newBlog.desc = desc;
            if (image) newBlog.image = image;
            if (author) newBlog.author = author;
            if (metadata) newBlog.metadata = metadata;

            let blog = await Blog.findById(id);
            if (!blog) return res.status(404).json({ msg: 'Blog not found' });

            // Make sure user owns blog
            if (blog.user.toString() !== user) {
                return res.status(401).json({ msg: 'Not authorized' });
            }

            blog = await Blog.findByIdAndUpdate(
                id,
                { $set: newBlog },
                { new: true }
            );
            res.json(blog);
        }


        // let p = await Blog.findByIdAndUpdate(req.body._id, req.body, { new: true })
        // console.log(p);
        // res.status(200).json({ p });
        // }
        // else {
        //     res.status(400).json({ error: "This method is not allowed" });
        // }
    } catch (error) {
        res.status(400).json({ error: error });
    }
}

export default dbConnect(handler);
