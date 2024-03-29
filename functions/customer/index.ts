import { db } from "../../firebase";

const createUser = async (email: string, name: string) => {
  const user = {
    name,
    email,
  };
  const docRef = db.collection("customers").doc();
  const id = docRef.id;
  const userWithId = {
    id,
    ...user,
  };
  await docRef.set(userWithId);
  return "user created";
};
const getUser = async (customerId: string) => {
  const userRef = db.collection("customers");
  const snapshot = await userRef.where("id", "==", customerId).get();
  let user: any = [];
  snapshot.forEach((doc: any) => {
    user.push(doc.data());
  });
  return user;
};
const getAllUsers = async () => {
  const userRef = db.collection("customers");
  const snapshot = await userRef.where("email", "!=", "admin@gmail.com").get();
  let users: any = [];
  snapshot.forEach((doc: any) => {
    users.push(doc.data());
  });
  return users;
};
const deleteUser = async (id: string) => {
  await db.collection("customers").doc(id).delete();
  return "user deleted";
};
export { createUser, deleteUser, getUser, getAllUsers };
