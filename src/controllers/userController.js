import userModel from "../models/userModel";
import productModel from "../models/productModel";

export default class userController {
    getRegister(req, res) {
        res.render('register');
    }

    getLogin(req, res) {
        res.render('login', { errorMessage: null })
    }

    postregister(req, res) {
        const { name, email, password } = req.body;
        userModel.add(name, email, password);
        res.render('login', { errorMessage: null });
    }

    postlogin(req, res) {
        const { email, password } = req.body;
        const user = userModel.isValid(email, password);
        if (!user) {
            return res.render('login', {
                errorMessage: 'Invalid Credentials',
            });
        }
        var products = productModel.getAll();
        res.render('index', { products });
    }

}

