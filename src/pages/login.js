import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router"
import FirebaseContext from '../context/firebase'

export default function Login() {
    const history = useHistory();

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password == '' || emailAddress == '';

    const handleLogin = () => {

    }

    useEffect(() => {
        document.title = 'Login-instagram';
    }, []);

    const {firebase} = useContext(FirebaseContext);
    return <p>Welcome to the Login Page</p>
}