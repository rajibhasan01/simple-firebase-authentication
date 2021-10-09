import React, { useState } from 'react';
import {
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
    FacebookAuthProvider,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    getAuth,
    signOut
} from "firebase/auth";
import initialization from './firebase.initialization';

initialization();
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();
const fbProvider = new FacebookAuthProvider();




const Login = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const loggedInfo = {
                    name: displayName,
                    email: email,
                    photo: photoURL
                };
                setUser(loggedInfo);
                setError('');
            })
            .catch(error => {
                setError(error.message);
                console.log('Error', error.message)
            })

    }
    const handleGitSignIn = () => {
        signInWithPopup(auth, gitProvider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const loggedInfo = {
                    name: displayName,
                    email: email,
                    photo: photoURL
                };
                setUser(loggedInfo);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })

    }

    const handleFbSignIn = () => {
        signInWithPopup(auth, fbProvider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const loggedInfo = {
                    name: displayName,
                    email: email,
                    photo: photoURL
                };
                setUser(loggedInfo);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })

    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setError('');
                setUser({});
            })
            .catch((error) => {
                setError(error.message);

            });
    }

    const handleForget = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                setError('Check your email for reset password')
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

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {

                setUser(result.user);

            })
            .catch((error) => {
                setError(error.message);
            });
    }
    return (
        <div className="my-5 mx-auto w-25">
            {
                !error ? <h5>{user.email}</h5> :
                    <h6>{error}</h6>

            }
            <form onSubmit={handleLogin}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onClick={handleEmail} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword3" required />
                    </div>
                </div>
                <div className="">
                    <button type="submit" className="btn btn-primary px-5">Login</button>
                </div>

            </form>
            {!user.email ?
                <div className="my-5">
                    <button onClick={handleGoogleSignIn} type="submit" className="btn btn-secondary px-5 m-3">Google Login</button>
                    <button onClick={handleGitSignIn} type="submit" className="btn btn-success px-5  m-3">Github Login</button>
                    <button onClick={handleFbSignIn} type="submit" className="btn btn-warning px-5  m-3">Facebook login</button>
                    <button onClick={handleForget} type="submit" className="btn btn-warning px-5  m-3">Forget Password</button>
                </div>
                :
                <div className="my-5">
                    <button onClick={handleSignOut} type="submit" className="btn btn-warning px-5  m-3">Sign out</button>
                </div>}

        </div>
    );
};

export default Login;