import Product from "../model/product.js";

export const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)

        return res.status(201).json({
            message: "Product created successfully",
            product
        })
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while creating the product",
            error: error.message
        })
    }
}