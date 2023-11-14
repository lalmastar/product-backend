import mongoose from 'mongoose';

const connectDB = async () => {
  console.log("DB Connected Successfully")
    mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    // useCreateIndex: true
})
};

export default connectDB;