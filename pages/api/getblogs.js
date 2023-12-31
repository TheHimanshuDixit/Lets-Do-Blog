
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/getblogs?slug=how-to-learn-javascript

// import * as fs from 'fs';

// export default function handler(req, res) {
//     fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (err, data) => {
//         if(err)
//         {
//             res.status(404).json({message: `Blog ${req.query.slug} not found`})
//         }
//         res.status(200).json( JSON.parse(data) )
//     })
// }

import Blog from '../../models/blog';
import dbConnect from '../../middleware/dbConnect';

const handler = async (req, res) => {
    const blogs = await Blog.find({});
    res.status(200).json(blogs);
}

export default dbConnect(handler);