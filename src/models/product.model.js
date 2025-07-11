import {db} from '../db.js';
import {} from 'firebase/firestore';
import {
    collection, 
    addDoc, 
    getDocs, 
    doc, 
    updateDoc, 
    deleteDoc
} from 'firebase/firestore';

const productsCollection = collection(db, 'productos');

export const getAllProducts = async () => {
    try {
        const productsSnapshot = await getDocs(productsCollection);
        const productsList = productsSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
        return productsList;
    } catch (error) {
        console.error("Error fetching products: ", error);
        throw new Error("Could not fetch products");
    }
};

export const saveProduct = async (product) => {
    try {
        const docRef = await addDoc(productsCollection, product);
        return {id: docRef.id, ...product};
    } catch (error) {
        console.error("Error saving product: ", error);
        throw new Error("Could not save product");
    }
};
export const updateProduct = async (id, product) => {
    try {
        const productDoc = doc(db, 'productos', id);
        await updateDoc(productDoc, product);
        return {id, ...product};
    } catch (error) {
        console.error("Error updating product: ", error);
        throw new Error("Could not update product");
    }
};

export const deleteProduct = async (id) => {
    try {
        const productDoc = doc(db, 'productos', id);
        await deleteDoc(productDoc);
        return {id};
    } catch (error) {
        console.error("Error deleting product: ", error);
        throw new Error("Could not delete product");
    }
};
export const getProductById = async (id) => {
    try {
        const productDoc = doc(db, 'productos', id);
        const productSnapshot = await getDocs(productDoc);
        if (productSnapshot.exists()) {
            return {id: productSnapshot.id, ...productSnapshot.data()};
        } else {
            throw new Error("Product not found");
        }
    } catch (error) {
        console.error("Error fetching product by ID: ", error);
        throw new Error("Could not fetch product by ID");
    }
};