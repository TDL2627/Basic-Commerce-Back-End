import { db } from "../../firebase";

const getProduct = async (id: string) => {
  const productRef = db.collection("products").doc(id);
  const doc = await productRef.get();
  if (!doc.exists) {
    console.log("product dont exsit");
  }
  return doc.data();
};
const getAllProducts = async () => {
  const productRef = db.collection("products");
  const snapshot = await productRef.get();
  let products: any = [];
  snapshot.forEach((doc: any) => {
    products.push(doc.data());
  });
  return products;
};

const createProduct = async (product: any) => {
  const docRef = db.collection("products").doc();
  const id = docRef.id;
  const productWithId = {
    id,
    ...product,
  };
  await docRef.set(productWithId);
};

const updateProduct = async (id: string, product: any) => {
  const result = await db.collection("products").doc(id).set(product);
  return result;
};

const deleteProduct = async (id: string) => {
  await db.collection("products").doc(id).delete();
};

const deleteMultipleProducts = async (products: any) => {
  products.forEach(async (productId: string) => {
    await db.collection("products").doc(productId).delete();
  });
};
const createMultipleProducts = async (products: any) => {
  products.forEach(async (product: string) => {
    await createProduct(product);
  });
};

export {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  getProduct,
  deleteMultipleProducts,
  createMultipleProducts
};
