import React from 'react';
import "./login.css";

const Login = () => {
    return (
        <>
            <div className='background-users'>
                    <div className="hero-body">
                        <div className="container login">
                            <div className="columns is-centered">
                                <div className="column is-6-tablet is-6-desktop is-6-widescreen">
                                    <form action="" className="box">
                                        <div className="field">
                                            <label htmlFor="email" className="label">Email:</label>
                                            <div className="control">
                                                <input type="email" placeholder="e.g. bobsmith@gmail.com" className="input" required name='email' id='email' />
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label htmlFor="password" className="label">Password</label>
                                            <div className="control">
                                                <input type="password" placeholder="*******" className="input" required name='password' id='password' />
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label htmlFor="" className="checkbox">
                                                <input type="checkbox" className='remember' /> Remember me
                                            </label>
                                        </div>
                                        <div className="field">
                                            <button className="button is-success is-fullwidth">
                                                Login
                                            </button>
                                        </div>
                                        <div className="has-text-centered">
                                            <p className="is-size-7"> No tiene cuenta? <a href="/form" className="has-text-primary">Crear una cuenta gratis</a>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Login;
