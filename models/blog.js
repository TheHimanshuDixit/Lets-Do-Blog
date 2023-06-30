// getting-started.js
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    image: { type: String, required: true },
    author: { type: String, required: true },
    metadata: { type: String }
});

// module.exports = mongoose.models.Product
export default mongoose.models.Blog || mongoose.model("Blog", blogSchema)