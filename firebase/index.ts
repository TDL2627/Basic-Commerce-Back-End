import * as admin from "firebase-admin";
import * as functions from "firebase/compat/functions";
import * as serviceAccount from './service.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

const db: admin.firestore.Firestore = admin.firestore();
export { db, functions };
