import {useState, useContext} from 'react';
import { UserContext } from '../context/UserContext';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';


const LoginPage = props => {




    return (
        <>
        
        <h1 className="text-danger" style={{display:"inline"}}>{props.authorized}</h1>
        <div className="container d-flex justify-content-around p-3 ">
            <form onSubmit={handleRegistration} className="col-md-5 p-3 text-start gap-3 bg-dark text-light">
                <h2>Registration</h2>

                <div className="form-group">
                    <label>Username</label>
                    <input onChange={handleRegInputs} name="username" type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input onChange={handleRegInputs} name="email" type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input onChange={handleRegInputs} name="password" type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input onChange={handleRegInputs} name="confirmPassword" type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <button className="btn btn-primary">Register</button>
                </div>
                
            </form>

            <form onSubmit={handleLogin} className="col-md-5 p-3 text-start gap-3 bg-dark text-light">
                <h2>Login</h2>
                <div className="form-group">
                    <label>Email</label>
                    <input onChange={handleLoginInputs} name="email" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input onChange={handleLoginInputs} name="password" type="text" className="form-control" />
                </div>
                
                <div className="form-group">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    </>
    )
}

export default LoginPage;