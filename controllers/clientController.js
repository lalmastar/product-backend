import Client from "../models/clientModel.js";
import asyncHandler from "express-async-handler";
import { sendEmail } from "./emailController.js";

// Create a Doctor
const createClient = asyncHandler(async (req, res) => {
  console.log(req.body);

  const { fullname, productname, email, phone, counts, requirement } = req.body;

  // var regex = /\b(?:gmail|yahoo|outlook)\b/gi;
  // const commonEmail = email.match(regex);

  // if(commonEmail){
  //   return res.json({
  //     message: "Use Professional email to connect with us.",
  //     success: false
  //   });
  // }

  const findClient = await Client.findOne({ email: email });

  if (!findClient) {
    const newClient = await Client.create(req.body);
    const resetURL = `<h4>Full Name: <span>${fullname}</span></h4>
                      <h4>Product Name: <span>${productname}</span></h4>
                      <h4>Requirement: <span>${requirement}</span></h4>
                      <h4>Email: <span>${email}</span></h4>
                      <h4>Phone Number: <span>${phone}</span></h4>
                      <h4>Counts: <span>${counts}</span></h4>`;
    const data = {
      to: email,
      text: "Hey Client",
      subject: "We connect you soon",
      html: resetURL,
    };
    // sendEmail(data);
    return res.json({
      newClient,
      message: "Submited your form, we will connect you soon.",
      success: true,
    });
  } else {
    return res.json({
      message: "Client Already Exists",
      success: false,
    });
  }
});

const getallClients = asyncHandler(async (req, res) => {
  try {
    const getClients = await Client.find();
    res.json(getClients);
  } catch (error) {
    console.log(error);
    res.json({
      message: error,
    });
  }
});

const deleteClient = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const deleteCli = await Client.findByIdAndDelete(id);
    res.json(deleteCli);
  } catch (error) {
    console.log(error);
    res.json({
      message: error,
    });
  }
});

export { createClient, getallClients, deleteClient };
