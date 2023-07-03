// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// http://localhost:3000/api/blogs

// import * as fs from 'fs';

// export default async function handler(req, res) {
//     let data = await fs.promises.readdir("blogdata")
//     let myfile;
//     let mydata = [];
//     for (let i = 0; i < data.length; i++) {
//         const item = data[i];
//         myfile = await fs.promises.readFile(("blogdata/" + item), "utf-8")
//         mydata.push(JSON.parse(myfile));
//     }
//     res.status(200).json(mydata)
// }


import Blog from '../../models/blog';
import dbConnect from '../../middleware/dbConnect';
var jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

const handler = async (req, res) => {
    if (req.method == 'POST') {
        const token = req.headers['auth-token'];
        if (!token) {
            res.status(401).send({ "Error": "Please authenticate using a valid token" });
        }
        try {
            const data = jwt.verify(token, JWT_SECRET);
            const user = await data.user.id;
            let p = await new Blog({
                user: user,
                title: req.body.title,
                slug: req.body.slug,
                desc: req.body.desc,
                image: req.body.image,
                author: req.body.author,
                metadata: req.body.metadata
            });
            const blog = await p.save();
            res.status(200).json({ blog: blog, success: "success" });
        } catch (error) {
            res.status(400).json({ error: error });
        }
    }
    else {
        res.status(400).json({ error: "This method is not allowed" });
    }
}

export default dbConnect(handler);