import React, { useState } from 'react';
import initialization from './firebase.initialization';
import {
    getAuth,
    createUserWithEmailAndPassword,
    sendEmailVerification
} from "firebase/auth";



initialization();


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();

    const handleRegistration = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password Should be 6 digit');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain two upper case');
            return;
        }

        registerNewUser(email, password);

    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('');
                verifyEmail();
                console.log('successful log in ', email, password);

            })
            .catch((error) => {
                setError(error.message);
            });
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                setError('Check your email for verification');
            });
    }
    return (
        <div className="my-5 mx-auto w-25" >
            <h6>{error}</h6>
            <form onSubmit={handleRegistration}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onChange={handleEmail} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword3" required />
                    </div>
                </div>
                <div className="mt-5">
                    <button type="submit" className="btn btn-primary px-5">Registation</button>
                </div>

            </form>
            <br />
            <br />
        </div>
    );
};

export default Register;