import Blog from '../../models/blog';
import dbConnect from '../../middleware/dbConnect';

const handler = async (req, res) => {
    const blogs = await Blog.find({});
    res.status(200).json(blogs);
}

export default dbConnect(handler);