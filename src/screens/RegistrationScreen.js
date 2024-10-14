import React from 'react';
import logoDark from '../assets/images/logo-dark.png'; // Import dark logo
import logoLight from '../assets/images/logolight.png'; // Import light logo

function Register() {
  return (
    <div className="auth-body-bg">
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
                          <a href="/">
                            <img
                              src={logoDark} // Use the imported dark logo
                              alt="Dark Logo"
                              height="20"
                              className="auth-logo logo-dark mx-auto"
                            />
                            <img
                              src={logoLight} // Use the imported light logo
                              alt="Light Logo"
                              height="20"
                              className="auth-logo logo-light mx-auto"
                            />
                          </a>
                        </div>

                        <h4 className="font-size-18 mt-4">Register account</h4>
                        <p className="text-muted">
                          Get your free Nazox account now.
                        </p>
                      </div>

                      <div className="p-2 mt-5">
                        <form action="#">
                          <div className="auth-form-group-custom mb-4">
                            <i className="ri-mail-line auti-custom-input-icon"></i>
                            <label htmlFor="useremail">Email</label>
                            <input
                              type="email"
                              className="form-control"
                              id="useremail"
                              placeholder="Enter email"
                            />
                          </div>

                          <div className="auth-form-group-custom mb-4">
                            <i className="ri-user-2-line auti-custom-input-icon"></i>
                            <label htmlFor="username">Username</label>
                            <input
                              type="text"
                              className="form-control"
                              id="username"
                              placeholder="Enter username"
                            />
                          </div>

                          <div className="auth-form-group-custom mb-4">
                            <i className="ri-lock-2-line auti-custom-input-icon"></i>
                            <label htmlFor="userpassword">Password</label>
                            <input
                              type="password"
                              className="form-control"
                              id="userpassword"
                              placeholder="Enter password"
                            />
                          </div>

                          <div className="text-center">
                            <button
                              className="btn btn-primary w-md waves-effect waves-light"
                              type="submit"
                            >
                              Register
                            </button>
                          </div>

                          <div className="mt-4 text-center">
                            <p className="mb-0">
                              By registering you agree to the Nazox{" "}
                              <a href="#" className="text-primary">
                                Terms of Use
                              </a>
                            </p>
                          </div>
                        </form>
                      </div>

                      <div className="mt-5 text-center">
                        <p>
                          Already have an account?{" "}
                          <a href="/login" className="fw-medium text-primary">
                            Login
                          </a>
                        </p>
                        <p>
                          © {new Date().getFullYear()} Nazox. Crafted with{" "}
                          <i className="mdi mdi-heart text-danger"></i> by{" "}
                          <a
                            href="https://1.envato.market/themesdesign"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Themesdesign
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="authentication-bg position-relative">
              <div className="bg-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
