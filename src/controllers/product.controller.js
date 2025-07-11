import { productService } from "../services/product.service";


// Implementation for getting all products
// This function retrieves all products from the database and returns them in the response.
const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json({ message: "Lista de productos",payload: products});
    } catch (error) {
        console.error("Error in controller: ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

// Implementation for getting a product by ID
const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await productService.getProductById(id);
        if (!product) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.status(200).json({ message: "Producto encontrado", payload: product });
    } catch (error) {
        console.error("Error in controller: ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Implementation for creating a new product
const createProduct = async (req, res) => {
    const productData = req.body;
    try {
        const newProduct = await productService.saveProduct(productData);
        res.status(201).json({ message: "Producto creado", payload: newProduct });
    } catch (error) {
        console.error("Error in controller: ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Implementation for updating a product
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const productData = req.body;
    try {
        const updatedProduct = await productService.updateProduct(id, productData);
        if (!updatedProduct) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.status(200).json({ message: "Producto actualizado", payload: updatedProduct });
    } catch (error) {
        console.error("Error in controller: ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Implementation for deleting a product
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await productService.deleteProduct(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.status(200).json({ message: "Producto eliminado", payload: deletedProduct });
    } catch (error) {
        console.error("Error in controller: ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};



export const productController = {
    getAllProducts,
    getProductById,
    createProduct, 
    updateProduct, 
    deleteProduct
};