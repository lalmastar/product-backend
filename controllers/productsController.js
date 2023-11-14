import Product from '../models/productsModel.js';
import asyncHandler from 'express-async-handler';

// Create a Doctor

const createProduct = asyncHandler(async (req, res) => {
    // console.log(req.body);

    const { category, productname, companyname, employees, industry, website, companyLinkedinUrl, description, companyAddress, city, state, country  } = req.body;

    // const email = req.body.email;

    const productExists = await Product.findOne({productname:productname});

    // console.log("Doctor exist",doctorExists);

    if(productExists){
      return res.json({
        message:"Product already exists"
      });
    }

    const product = await Product.create({
      category,
      productname,
      companyname,
      employees,
      industry,
      website,
      companyLinkedinUrl,
      description,
      companyAddress,
      city,
      state,
      country,
    });

    if (product) {
      res.status(201).json({
        product: product,
        message:"Added Successfully"
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }

})

  // Get all Products

  const getProduct = asyncHandler(async (req, res) => {
    const {id} = req.params;
    console.log(id);
    try {
      const getProduct = await Product.findById(id);
      res.json(getProduct);
    } catch (error) {
      console.log(error);
      res.json({
        message:error
      })
    }
  });

  // Get all Products

  const getallProducts = asyncHandler(async (req, res) => {
    try {
      const getProducts = await Product.find();
      res.json(getProducts);
    } catch (error) {
      console.log(error);
      res.json({
        message:error
      })
    }
  });

  // Get all Product Admin

  const getallProductsAdmin = async (req, res) => {
    try {
      const getProductsAdmin = await Product.find();
      res.json(getProductsAdmin);
    } catch (error) {
      console.log(error);
      res.json({
        message:error
      })
    }
  };

  // Delete a Product

  const deleteProduct = async (req, res) => {
    const {id} = req.params;
    console.log(id);
    try {
      const deleteProduct = await Product.findByIdAndDelete(id);
      res.json(deleteProduct);
    } catch (error) {
      console.log(error);
      res.json({
        message:error
      })
    }
  };

export {createProduct, getProduct, getallProducts, getallProductsAdmin, deleteProduct};