import Product from "../models/productModel.js"
import ErrorHandler from "../utils/errorHandler.js";
import catchAsynchErrors from "../middlewares/catchAsyncError.js";
import ApiFeatures from "../utils/apiFeatures.js";

//Crate Product
export const createProduct=catchAsynchErrors(async (req,res,next)=>{
    
    req.body.user=req.user.id;
    const product=await Product.create(req.body);
     return res.status(201).json({
        success:true,
        product
    })
})

//Get all Products
export const getAllProducts=catchAsynchErrors((async (req,res,next)=>{

    
    const resultPerPage=8;
    const productsCount=await Product.countDocuments();
    const apiFeature=new ApiFeatures(Product.find(),req.query).search().filter().pagination(resultPerPage);


    const products=await apiFeature.query;
    
    return res.status(201).json({
        success:true,
        products,
        productsCount
    })
}))

//Get Product Details
export const getProductDetails=catchAsynchErrors(async (req,res,next)=>{
    const product=await Product.findById(req.params.id)
    if(!product) return next(new ErrorHandler("Product not found",404))
    return res.status(201).json({
        success:true,
        product
    })
})


//Update Product
export const updateProduct=catchAsynchErrors(async (req,res,next)=>{
    let product=await Product.findById(req.params.id)
    if(!product) return next(new ErrorHandler("Product not found",404))
    
    product=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,useFindAndModify:true})
    return res.status(200).json({
        success:true,
        product
        
    })
   
})


//Delete A Products
export const deleteProduct=catchAsynchErrors(async (req,res,next)=>{
    
    let product=await Product.findById(req.params.id)

    if(!product) return next(new ErrorHandler("Product not found",404))
   
        await Product.deleteOne();
        return res.status(200).json({
            success:true,
            message:"Product Deleted Succefully"
        })
    
})

//Create New Review Or Update Review
export const createProductReview=catchAsynchErrors(async(req,res,next)=>{
    const {rating,comment,productId}=req.body;
    const Review={
        user:req.user.id,
        name:req.user.name,
        rating:Number(rating),
        comment,
        productId
    }
    const product=await Product.findById(productId);
    const isReviewed=product.reviews.find(rev=>rev.user===req.user.id);
    if(isReviewed){
        product.reviews.forEach((rev)=>{
            if(rev.user===req.user.id){
            rev.rating=rating,
            rev.comment=comment
            }
        })


    }else{
        product.reviews.push(Review)
        product.numOfReviews=product.reviews.length;
    }
    let avg=0;
    product.ratings=(product.reviews.forEach(rev=>{avg+=Number(rev.rating)}));
    product.ratings=(avg/product.numOfReviews);
    

    await product.save({validateBeforeSave:false});

    res.status(200).json({
        success:true,
        product
    })
})


//Get All Reviews Of A Product

export const getProductReviews=catchAsynchErrors(async (req,res,next)=>{
    const product=await Product.findById(req.query.id);

    if(!product){
        return next(new ErrorHandler("Product Not Found",404));

    }

    res.status(200).json({
        success:true,
        reviews:product.reviews
    })
})


//Get All Reviews Of A Product

export const deleteProductReview=catchAsynchErrors(async (req,res,next)=>{
    const product=await Product.findById(req.query.productId);

    if(!product){
        return next(new ErrorHandler("Product Not Found",404));

    }

    const reviews=product.reviews.filter(rev=>rev._id.toString()!==req.query.id.toString());

    
     let avg=0;
    const ratings=(product.reviews.forEach(rev=>{avg+=Number(rev.rating)}));
    product.ratings=(avg/reviews.length);
    

    const numOfReviews=product.reviews.length;
    await Product.findByIdAndUpdate(req.query.productId,{reviews,ratings,numOfReviews},{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })

    res.status(200).json({
        success:true,
        
    })
})