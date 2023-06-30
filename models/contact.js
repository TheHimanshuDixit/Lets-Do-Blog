// getting-started.js
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    message: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Contact || mongoose.model("Contact", contactSchema);
