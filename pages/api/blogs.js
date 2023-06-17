// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// http://localhost:3000/api/blogs

import * as fs from 'fs';

export default async function handler(req, res) {
    let data = await fs.promises.readdir("blogdata")
    let myfile;
    let mydata = [];
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        myfile = await fs.promises.readFile(("blogdata/" + item), "utf-8")
        mydata.push(JSON.parse(myfile));
    }
    res.status(200).json(mydata)
}
