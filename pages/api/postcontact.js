// import * as fs from 'fs';
// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         // Process a POST request
//         // Process a POST request
//         let data = await fs.promises.readdir('contactdata');
//         fs.promises.writeFile(`contactdata/${data.length + 1}.json`, JSON.stringify(req.body))
//         res.status(200).json(req.body)
//     } else {
//         // Handle any other HTTP method
//         res.status(200).json(["allBlogs"])
//         //   name, email, desc, phone

//     }
// }

import Contact from '../../models/contact';
import dbConnect from '../../middleware/dbConnect';

const handler = async (req, res) => {
    if (req.method == 'POST') {
        // for (let i = 0; i < req.body.length; i++) {
        //     let p = new Contact({
        //         name: req.body[i].name,
        //         phone: req.body[i].phone,
        //         email: req.body[i].email,
        //         message: req.body[i].message
        //     })
        //     await p.save();
        // }
        let p = new Contact(req.body)
        await p.save();
        res.status(200).json({ success: "success" });
    }
    else {
        res.status(400).json({ error: "This method is not allowed" });
    }
}

export default dbConnect(handler);