import React from 'react';
 

function  Login () {
    return (
        <div className="auth-body-bg">
            <div>
                <div className="container-fluid p-0">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <div className="authentication-page-content p-4 d-flex align-items-center min-vh-100">
                                <div className="w-100">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-9">
                                            <div>
                                                <div className="text-center">
                                                    <div>
                                                        <a href="index.html" className="">
                                                            <img src="assets/images/logo-dark.png" alt="" height="20" className="auth-logo logo-dark mx-auto" />
                                                            <img src="assets/images/logo-light.png" alt="" height="20" className="auth-logo logo-light mx-auto" />
                                                        </a>
                                                    </div>
    
                                                    <h4 className="font-size-18 mt-4">Welcome Back !</h4>
                                                    <p className="text-muted">Sign in to continue to Nazox.</p>
                                                </div>
    
                                                <div className="p-2 mt-5">
                                                    <form className="" action="https://themesdesign.in/nazox-ajax/layouts/index.html">
                                                        
                                                        <div className="mb-3 auth-form-group-custom mb-4">
                                                            <i className="ri-user-2-line auti-custom-input-icon"></i>
                                                            <label htmlFor="username">Username</label>
                                                            <input type="text" className="form-control" id="username" placeholder="Enter username" />
                                                        </div>
    
                                                        <div className="mb-3 auth-form-group-custom mb-4">
                                                            <i className="ri-lock-2-line auti-custom-input-icon"></i>
                                                            <label htmlFor="userpassword">Password</label>
                                                            <input type="password" className="form-control" id="userpassword" placeholder="Enter password" />
                                                        </div>
    
                                                        <div className="form-check">
                                                            <input type="checkbox" className="form-check-input" id="customControlInline" />
                                                            <label className="form-check-label" htmlFor="customControlInline">Remember me</label>
                                                        </div>
    
                                                        <div className="mt-4 text-center">
                                                            <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Log In</button>
                                                        </div>
    
                                                        <div className="mt-4 text-center">
                                                            <a href="auth-recoverpw.html" className="text-muted"><i className="mdi mdi-lock me-1"></i> Forgot your password?</a>
                                                        </div>
                                                    </form>
                                                </div>
    
                                                <div className="mt-5 text-center">
                                                    <p>Don't have an account ? <a href="auth-register.html" className="fw-medium text-primary"> Register </a> </p>
                                                    <p>© {new Date().getFullYear()} Nazox. Crafted with <i className="mdi mdi-heart text-danger"></i> by <a href="https://1.envato.market/themesdesign" target="_blank">Themesdesign</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="authentication-bg">
                                <div className="bg-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
