// Check whether a user is logged in or not

import { useState, useEffect, useContext } from "react";
import FirebaseContext from './../context/firebase';

export default function useAuthListener() {
    const [user, setuser] = useState(JSON.parse(localStorage.getItem('authUser')));
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged((authUser) => {
            if (authUser) {
                // we have the user, then we can store the user in the local storage
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setuser(authUser);
            } else {
                // we dont have auth user, therefore cleaning the local storage
                localStorage.removeItem('authUser');
                setuser(null);
            }
        });

        return () => listener(); // in order to clean up the listener
    }, [firebase]);

    return { user };
}
