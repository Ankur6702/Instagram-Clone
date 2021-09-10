import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router"
import { Link } from "react-router-dom";
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

    const { firebase } = useContext(FirebaseContext);
    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img src="/images/iphone-with-profile.jpg" alt="iPhone with Instagram app" />
            </div>
            <div className="flex flex-col 2-2/5">
                <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4">
                    <h1 className="flex justify-center w-full">
                        <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
                    </h1>
                    {error && <p className="mb-4 text-xs text-red-primary">
                        {error}
                    </p>}

                    <form onSubmit={handleLogin} method="POST">
                        <input
                            aria-label="Enter your email address"
                            type="text"
                            placeholder="Email Address"
                            className="text-sm text-gray-base w-full mr-3 px-4 py-5 h-2 border border-gray-primary rounded mb-2"
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <input
                            aria-label="Enter your password"
                            type="password"
                            placeholder="Password"
                            className="text-sm text-gray-base w-full mr-3 px-4 py-5 h-2 border border-gray-primary rounded mb-2"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <button
                            disabled={isInvalid}
                            type="submit"
                            className={`bg-blue-500 text-white w-full roundeed h-8 font-bold 
                        ${isInvalid && 'opacity-60'}`}
                        >
                            Log In
                        </button>
                    </form>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-white p-4 border border-primary-gray">
                    <p className="text-sm">Don't have an account?{` `}
                        <Link to="/signup" className="font-bold text-blue-medium">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}