import { db } from "../../firebase";

const getOrder = async (id: string) => {
  const orderRef = db.collection("orders").doc(id);
  const doc = await orderRef.get();
  if (!doc.exists) {
    console.log("order dont exsit");
  }
  return doc.data();
};
const getAllOrders = async () => {
  const orderRef = db.collection("orders");
  const snapshot = await orderRef.get();
  let orders: any = [];
  snapshot.forEach((doc: any) => {
    orders.push(doc.data());
  });
  return orders;
};

const createOrder = async (order: any) => {
  const docRef = db.collection("orders").doc();
  const id = docRef.id;
  const orderWithId = {
    id,
    ...order,
  };
  await docRef.set(orderWithId);
};

const updateOrder = async (id: string, order: any) => {
  const result = await db.collection("orders").doc(id).set(order);
  return result;
};

const deleteOrder = async (id: string) => {
  await db.collection("orders").doc(id).delete();
};

const deleteMultipleOrders = async (orders: any) => {
  orders.forEach(async (orderId: string) => {
    await db.collection("orders").doc(orderId).delete();
  });
};
const createMultipleOrders = async (orders: any) => {
  orders.forEach(async (order: string) => {
    await createOrder(order);
  });
};

export {
  createOrder,
  deleteOrder,
  updateOrder,
  getAllOrders,
  getOrder,
  deleteMultipleOrders,
  createMultipleOrders
};
