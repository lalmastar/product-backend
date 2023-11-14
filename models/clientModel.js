import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "Your fullname is required"],
    },
    productname: {
        type: String,
        required: [true, "Your product name is required"],
    },
    email: {
        type: String,
        required: [true, "Your email address is required"],
        unique: true,
    },
    phone: {
        type: String,
        required: [true, "Your phone number is required"],
        unique: true,
    },
    counts: {
        type: String,
        required: [true, "Your counts is required"],
    },
    requirement:{
        type: String,
        required: [true, "Your requirement is required"],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const Client = mongoose.model("Client", clientSchema);

export default Client;