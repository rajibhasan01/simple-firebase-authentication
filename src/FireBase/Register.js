import React from 'react';

const Register = () => {
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
                <div className="mt-5">
                    <button type="submit" className="btn btn-primary px-5">Registation</button>
                </div>

            </form>
            <br />
            <br />
            <p>Already have an account!</p>
        </div>
    );
};

export default Register;