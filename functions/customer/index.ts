import { db } from "../../firebase";

const createUser = async () => {
  const user = {
    id: "USA",
    name: "Los Angeles",
    email: "peter@mail.com",
  };

  // Add a new document in collection "cities" with ID 'LA'
  const result = await db.collection("customers").doc().set(user);
  console.log(result, "aye");
};
export { createUser };
