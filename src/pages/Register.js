import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import AuthUser from '../components/AuthUser';
import Guestnavbar from "../components/GuestNavbar";

export default function Register() {
    const navigate = useNavigate();
    const {http} = AuthUser();
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const submitForm = () =>{
        // api call
        http.post('/register',{email:email,password:password,name:name}).then((res)=>{
            navigate('/login')
        })
    }

    return(
        <div>
            <Guestnavbar/>
            <div className="container">
            <div className="row pt-5">
                <div className="col-md-5">
                    <div className="register-image">
                        <img src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-login_516790-1261.jpg?w=2000" alt="" style={{ height: "400px" }}/>
                    </div>
                </div>
                <div className="col-md-6 p-5">                    
                        <h1 className="text-center mb-3">Register </h1>
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="test" className="form-control" placeholder="Enter name"
                                onChange={e=>setName(e.target.value)}
                            id="name" />
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address:</label>
                            <input type="email" className="form-control" placeholder="Enter email"
                                onChange={e=>setEmail(e.target.value)}
                            id="email" />
                        </div>

                        <div className="form-group mt-3">
                            <label>Password:</label>
                            <input type="password" className="form-control" placeholder="Enter password"
                                onChange={e => setPassword(e.target.value)}
                            id="pwd" />
                        </div>
                        <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Register</button>
                    
                </div>
            </div>
            </div>
        </div>
    )
}