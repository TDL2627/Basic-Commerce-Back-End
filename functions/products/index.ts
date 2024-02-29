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

const createProduct = async (
  description: string,
  name: string,
  price: number
) => {
  const product = {
    name,
    description,
    price,
  };
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

export {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  getProduct,
};
