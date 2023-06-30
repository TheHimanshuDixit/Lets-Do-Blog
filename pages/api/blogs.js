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

const handler = async (req, res) => {
    if (req.method == 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            let p = new Blog({
                title: req.body[i].title,
                slug: req.body[i].slug,
                desc: req.body[i].desc,
                image: req.body[i].image,
                author: req.body[i].author,
                metadata: req.body[i].metadata
            })
            await p.save();
        }
        res.status(200).json({ success: "success" });
    }
    else {
        res.status(400).json({ error: "This method is not allowed" });
    }
}

export default dbConnect(handler);