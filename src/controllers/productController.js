import path from "path";
import ProductModel from "../models/productModel.js";
import { url } from "inspector";
import productModel from "../models/productModel.js";

export default class productController {
  getProduct(req, res) {
    let product = ProductModel.get();
    // console.log(product);
    // return res.sendFile(path.join(path.resolve() , 'src' , 'view' , 'products.ejs'));
    res.render('products', { Product: product })
  }

  getAddForm(req, res) {
    return res.render('new-product.ejs', { errormesssage: null })
  }

  addNewProduct(req, res) {
    //validate the products[data]
    const {name , desc , price} = req.body;
    const imageUrl = "src/public/images/" + req.file.filename;
    console.log(req.body);
    ProductModel.add(name , desc , price , imageUrl);
    let Product = ProductModel.get();
    return res.render('products', { Product });
  }

  getUpdateproductview(req, res, next) {
    // 1. if product exists then return view
    var { id } = req.params.id;
    console.log(req.params.id)
    const productFound = ProductModel.getById(id);
    if (productFound) {
      res.render('update-product', {
        Product: productFound,
        errormesssage: null,
      });
    }
    // 2. else return errors.
    else {
      res.status(401).send('Product not found');
    }
  }

  deleteProduct(req, res) {
    const id = req.params.id;
    console.log(id)
    productModel.delete(id);
    res.render('products', { Product });
    var products = productModel.get();
    const productFound = ProductModel.getById(id);
    if (!productFound) {
      res.status(401).send('Product not found');
    }
  }
}