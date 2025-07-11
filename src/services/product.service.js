// services
import {getAllProducts,getProductById,updateProduct,deleteProduct,saveProduct} from '../models/product.model.js';

const getAllProducts = () => {
    return getAllProducts()
        .then(products => {
            return products;
        })
        .catch(error => {
            console.error("Error in service layer: ", error);
            throw new Error("Could not fetch products from service");
        });
}

const getProductById = (id) => {
    return getProductById(id)
        .then(product => {
            return product;
        })
        .catch(error => {
            console.error("Error in service layer: ", error);
            throw new Error("Could not fetch product by ID from service");
        });
} 

const saveProduct = (product) => {
    return saveProduct(product)
        .then(savedProduct => { 
            return savedProduct;
        }
        )
        .catch(error => { 
            console.error("Error in service layer: ", error);
            throw new Error("Could not save product from service");
        });
}

const updateProduct = (id, product) => {
    return updateProduct(id, product)
        .then(updatedProduct => {
            return updatedProduct;
        })
        .catch(error => {
            console.error("Error in service layer: ", error);
            throw new Error("Could not update product from service");
        }); 
}

const deleteProduct = (id) => {
    return deleteProduct(id)
        .then(deletedProduct => {
            return deletedProduct;
        })
        .catch(error => {
            console.error("Error in service layer: ", error);
            throw new Error("Could not delete product from service");
        });         
}


// Exporting the product service functions
export const productService = {
    getAllProducts,
    getProductById, 
    updateProduct, 
    deleteProduct, 
    saveProduct
};


