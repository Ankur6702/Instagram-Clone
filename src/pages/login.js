import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router"
import FirebaseContext from '../context/firebase'

export default function Login() {
    const history = useHistory();

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === '' || emailAddress === '';

    const handleLogin = () => {

    }

    useEffect(() => {
        document.title = 'Login-instagram';
    }, []);

    const {firebase} = useContext(FirebaseContext);
    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <p>I have no idea!</p>
        </div>
    );
}