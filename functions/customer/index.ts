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
export { createUser };
