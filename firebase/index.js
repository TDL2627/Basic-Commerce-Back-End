const admin = require("firebase-admin");

import * as serviceAccount from './service.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});