import express from 'express';
import productController from './src/controllers/productController.js';
import userController from './src/controllers/userController.js';
import ejsLayouts from 'express-ejs-layouts';
import path from 'path';
import validateRequest from './src/Middleware/validateRequest.js';
import productModel from './src/models/productModel.js';
import { uploadFile } from './src/Middleware/fileUploadMultiware.js';

const server = express();

// server set
server.set("view engine" , "ejs");
server.set("views" , path.join(path.resolve(), 'src' , 'view'));

server.use(ejsLayouts);


//setpul url encoder
server.use(express.urlencoded({extended:true}));

// creating an instance
const ProductController = new productController();
const UsersController = new userController();

server.get('/register' , UsersController.getRegister)
server.get('/' , ProductController.getProduct);
server.get('/new', ProductController.getAddForm );
server.get('/update-product/:id', ProductController.getUpdateproductview);
server.post('/' , uploadFile.single('imageurl') ,validateRequest , ProductController.addNewProduct);
server.get('/delete-product/:id' , ProductController.deleteProduct);

server.use(express.static('src/view'));
server.listen(3400);
console.log('the server is listed to 3400')