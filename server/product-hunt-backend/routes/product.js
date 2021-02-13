var express = require("express");
var router = express.Router();
const Product = require("../Model/Product");
const slugify = require("slugify");
const auth = require("../modules/config");
const User = require("../Model/User");
const Comment = require("../Model/Comment");

//creating product
router.post("/",auth.verifyToken, async (req,res,next)=> {
    try {
        req.body.product.slug = slugify(`${req.body.product.title}`);
        req.body.product.author = req.user.userId;
        let authorDetail = await User.findById(req.user.userId);
        let createdProduct = await Product.create(req.body.product);
        res.json({products: productData(createdProduct,authorDetail)});
    } catch (error) {
        next(error);
        console.log(error);
    }
});

// geting single product
router.get("/:slug",async (req,res,next)=> {
    try {
        let slug = req.params.slug;
        let product = await Product.findOne({slug}).populate('author');
        res.json({products: productData(product,product.author)});
    } catch (error) {
        next(error);
    }
});

// updating product
router.put("/:slug",auth.verifyToken,async (req,res,next)=> {
    try {
        let slug = req.params.slug;
        req.body.product.slug = slugify(`${req.body.product.title}`);
        let updatedProduct = await Product.findOneAndUpdate({slug},req.body.product,{new:true}).populate('author');
        res.json({products: productData(updatedProduct,updatedProduct.author)});
    } catch (error) {
        console.log(error)
        next(error);
    }
});

// deleting an product
router.delete("/:slug", auth.verifyToken, async(req,res,next)=> {
    try {
        let slug = req.params.slug;
        let deletedProduct = await Product.findOneAndDelete({slug});
        res.json("product deleted");
    } catch (error) {
        next(error);
    }
});
// list of all the product
router.get("/",async (req,res,next)=> {
    try {
        let products = await Product.find({}).populate('author');
        res.json({products:products.map((product) => productData(product,product.author))});
    } catch (error) {
        console.log(error);
        next(error);
    }
});

function productData(product,author) {
    return {
        slug: product.slug,
        title: product.title,
        description: product.description,
        body: product.body,
        tagList: product.tagList,
        images: product.images,
        upvotes: product.upvotes,
        author: {
            username: author.username,
            bio: author.bio,
            image: author.image,
        }
    }
}

module.exports = router;