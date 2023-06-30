// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../middleware/dbConnect';
import User from '@/models/user';
var CryptoJS = require("crypto-js");
require('dotenv').config();

const handler = async (req, res) => {
    if (req.method == 'POST') {
        const {name, email, password} = req.body;
        let u = new User({name, email, password: CryptoJS.AES.encrypt(password, process.env.AES_SECRET).toString() });
        u.save();
        res.status(200).json({ success: "success" });
    }
    else {
        res.status(400).json({ error: "This method is not allowed" });
    }
}

export default dbConnect(handler);