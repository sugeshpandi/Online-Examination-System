import React from 'react';
import './Login.css';

const Login = () => {
          return (
                    <main className="login-container">
                              <div className="login-form">
                                        <form>
                                                  <div className="form-group">
                                                            <label htmlFor="username">UserName</label>
                                                            <input
                                                                      type="text"
                                                                      required
                                                                      placeholder="Enter your name"
                                                                      autoFocus
                                                                      id="username"
                                                                      className="form-control"
                                                            />
                                                  </div>
                                                  <div className="form-group">
                                                            <label htmlFor="password">Password</label>
                                                            <input
                                                                      type="password"
                                                                      required
                                                                      placeholder="Enter your password"
                                                                      id="password"
                                                                      className="form-control"
                                                            />
                                                  </div>
                                                  <button type="submit" className="btn btn-primary">
                                                            Login
                                                  </button>
                                        </form>
                                        <ul className="login-links">
                                                  <li>
                                                            <a href="#">Forget Password ?</a>
                                                  </li>
                                                  <li>
                                                            <a href="#">Sign Up</a>
                                                  </li>
                                        </ul>
                              </div>
                    </main>
          );
};

export default Login;