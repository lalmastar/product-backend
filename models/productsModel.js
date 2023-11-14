import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    category: {
        type: String,
    },
    productname: {
        type: String,
    },
    companyname: {
        type: String,
    },
    employees: {
        type: String,
    },
    industry: {
        type: String,
    },
    website: {
        type: String,
    },
    companyLinkedinUrl: {
        type: String,
    },
    description: {
        type: String,
    },
    companyAddress: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    country: {
        type: String,
    },
    
}, 
  { 
    timestamps: true
  }
)

const Doctor = mongoose.model('Products', productSchema);

export default Doctor;