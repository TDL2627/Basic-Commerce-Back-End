import { db } from "../../firebase";

const createUser = async (email: string, name: string) => {
  const user = {
    name,
    email,
  };
  const docRef =  db.collection("customers").doc();
  const id = docRef.id;
  const userWithId = {
    id,
    ...user,
  };
  await docRef.set(userWithId);
};
const getUser = async (customerId: string) => {
  const userRef = db.collection("users");
  const snapshot = await userRef.where("id", "==", customerId).get();
  let user: any = [];
  snapshot.forEach((doc: any) => {
    user.push(doc.data());
  });
  return user;
};
const getAllUsers = async () => {
  const userRef = db.collection("users");
  const snapshot = await userRef.get();
  let users: any = [];
  snapshot.forEach((doc: any) => {
    users.push(doc.data());
  });
  return users;
};
const deleteUser =  async (id: string)=>{
  const res = await db.collection("customers").doc(id).delete();
}
export { createUser, deleteUser, getUser, getAllUsers };
