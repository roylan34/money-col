import * as path from "path";
// import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

require("dotenv").config({ path: path.resolve(__dirname, `../.env`) });

console.log("process.env.DATABASE_URL", process.env.DATABASE_URL);
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: process.env.DATABASE_URL,
});

// export const onCreate: functions.CloudFunction<admin.auth.UserRecord> = functions.auth
//   .user()
//   .onCreate((user) => {
//     console.log("USER CREATED", user);
//   });

export * from "./triggers";
