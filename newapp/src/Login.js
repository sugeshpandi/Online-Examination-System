import React from 'react';

const Login = () => {
          return (
                    <main className='login'>
                              <div className='loginform'>

                                        <input
                                                  type='text'
                                                  required
                                                  placeholder='Enter the name:'
                                                  autoFocus
                                                  id='username'
                                        />
                                        <input
                                                  type='email'
                                                  placeholder='Enter the name:'
                                                  required
                                                  autoFocus
                                                  id='email'
                                        />

                                        <button>Login</button>
                                        <li><a href='#'>Forget password</a></li>
                                        <li><a href='#'>Sign Up</a></li>


                              </div>
                    </main>
          );
}

export default Login;
