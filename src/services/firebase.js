import { firebase, FieldValue } from "../lib/firebase";

export async function doesUsernameExists(username) {
    const result = await firebase
        .firestore()
        .collection("users")
        .where('username', '==', username)
        .get()
    // console.log(result.docs);
    // return result.docs.map((user) => user.data.length > 0);  // this will return an array of boolean values  
    return result.docs.map((user) => user.data.length > 0).length;
}

export async function getUserByUserId(userId) {
    const result = await firebase
        .firestore()
        .collection("users")
        .where('userId', '==', userId)
        .get();

    const user = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }));
    return user;
}