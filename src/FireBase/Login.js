import React from 'react';

const Login = () => {
    return (
        <div className="my-5 mx-auto w-25">
            <form onSubmit>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" />
                    </div>
                </div>
                <div className="">
                    <button type="submit" className="btn btn-primary px-5">Login</button>
                </div>

            </form>
            <div className="my-5">
                <button type="submit" className="btn btn-secondary px-5 m-3">Google Login</button>
                <button type="submit" className="btn btn-success px-5  m-3">Github Login</button>
                <button type="submit" className="btn btn-warning px-5  m-3">Facebook login</button>
            </div>
            <p>If you don't have an account, please click here for Registation!</p>
        </div>
    );
};

export default Login;