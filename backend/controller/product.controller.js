import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
  const product = req.body; //user will send this data

  if (!product.name || !product.price || !product.image)
    return res.status(400).json({ success: false, message: "Please provide all the fields" });

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log("Error in Create Product:", error.message);
    res.status(500).json({ error: true, message: "Server Error" });
  }

};

export const deleteProduct = async (req, res) =>{

  const {id} = req.params;

  try {
    await Product.findByIdAndDelete(id); //Product basically is collection name
    res.status(200).json({success: true, message: "Product deleted"});
    console.log("id:", id);
  } catch (error) {
    res.status(404).json({error: true, message: "Product not found"});
  }
};

export const getAProduct = async (req, res) =>{
const {id} = req.params;

try {
  const newProduct = await Product.findById(id);
  console.log(newProduct);
  res.status(200).json({success: true, data: newProduct});
} catch (error) {
  console.log(error)
  res.status(404).json({error: true, message: "Product not found"});
}
};

export const getAllProducts = async (req, res) => {

  try {
    const products = await Product.find({});
    res.status(200).json({data: products});
  } catch (error) {
    res.status(404).json({error: true, message: "No products found"})
  }
};

export const modifyProduct = async (req, res) => {
  const {id} = req.params;

  const product = req.body;

  if(!product.name || !product.price || !product.image)
    return res.status(400).json({error: true, message: "Please provide all the details"});

if(!mongoose.Types.ObjectId.isValid(id))
  return res.status(404).json({success: false, message: "Invalid Product Id"});

  try {
      await Product.findByIdAndUpdate(id, req.body)
      const newProduct = await Product.findById(id);
      res.status(200).json({success: true, message: "Updated successfully", data: newProduct});
  } catch (error) {
    res.status(404).json({error: true, message: "Updation unsuccessful"});
  }

}