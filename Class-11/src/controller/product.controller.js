import Product from "../model/product.model.js"

// CREATE PRODUCT
export const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        return res.status(201).json({
            message:"Product created successfully",
            product,
        })

    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while creating product",
            error: error.message,
        })
    }
}

// GET PRODUCT
export const getProduct = async(req,res)=>{
    try {
       const product = await Product.find().populate("user")        
       return res.status(200).json({
        message:"Product fetched successfully",
        product,
       })
    } catch (error) {
        return res.status(500).json({
            message:"An error occurred while getting product",
            error:error.message,
        }) 
    }
}
