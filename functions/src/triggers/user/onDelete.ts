import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { QueryDocumentSnapshot } from "firebase-functions/lib/providers/firestore";

export const onDeleteUser: functions.CloudFunction<functions.Change<
  QueryDocumentSnapshot
>> = functions.firestore
  .document("/users/{id}")
  .onUpdate(async (change, context) => {
    const user = change.after.data();

    let deletedUser;
    if (user.isDeleted && user.roles.lecturer) {
      deletedUser = await admin
        .firestore()
        .collection("users")
        .doc(context.params.id)
        .delete()
        .then(() => {
          return admin.auth().deleteUser(context.params.id);
        })
        .catch((error) => {
          throw error;
        });
    }

    return deletedUser;
  });
