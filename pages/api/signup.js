// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../middleware/dbConnect';
import User from '@/models/user';
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');
require('dotenv').config();

const handler = async (req, res) => {
    if (req.method == 'POST') {
        const { name, email, password } = req.body;
        let u = new User({ name, email, password: CryptoJS.AES.encrypt(password, process.env.AES_SECRET).toString() });
        await u.save();
        var token = jwt.sign({ email: email, name: name }, process.env.JWT_SECRET, { expiresIn: '1d' });  // expires in 1 days
        res.status(200).json({ success: "success", token });
    }
    else {
        res.status(400).json({ error: "This method is not allowed" });
    }
}

export default dbConnect(handler);
