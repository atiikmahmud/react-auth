import { useState } from "react";
import AuthUser from "../components/AuthUser";
import { Link } from "react-router-dom";
import Guestnavbar from "../components/GuestNavbar";

export default function Login() {
    const {http, setToken} = AuthUser();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitForm = () =>{
        //api call
        http.post('/login',{email:email, password:password}).then((res)=>{
            setToken(res.data.user, res.data.access_token);
        });
    }

    
    return(
        <>
            <Guestnavbar/>
            <div className="container">
            <div className="row pt-5">
                <div className="col-md-5">
                    <div className="login-image">
                        <img src="https://img.freepik.com/premium-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg?w=2000" alt="" style={{ height: "400px" }}/>
                    </div>
                </div>

                <div className="col-md-6 p-5">
                    <h1 className="text-center mb-3">Login</h1>
                    <div className="form-group mb-3">
                        <label>Email Address</label>
                        <input type="email" className="form-control" id="email" onChange={e => setEmail(e.target.value)} placeholder="Enter your email..." required />
                    </div>
                    <div className="form-group mb-3">
                        <label>Password</label>
                        <input type="password" className="form-control" id="pwd" onChange={e => setPassword(e.target.value)} placeholder="Enter your password..." required/>
                    </div>
                    <div className="form-group mb-1">
                        <small>If you arenot registered, <Link to="/register">Click here.</Link></small>
                    </div>
                    
                    <button type="button" onClick={submitForm} className="btn btn-primary mt-3">Login</button>                    
                </div>
            </div>
            </div>
        </>
    );
}