import React, {useState,useContext} from 'react';
import loginpic from "../images/login.jpg";
import { NavLink, useHistory } from 'react-router-dom';
import { UserContext } from '../App';
    
const Login = () => {

    const {state, dispatch} = useContext(UserContext);

    const history = useHistory();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


   const loginInput = async (e) => {
        e.preventDefault();

        
        const res = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const data = await res.json();

        if (res.status === 400 || !data) {
            window.alert("Inavalid login");
            console.log("Inavlid login");
        }
        else {
            dispatch({ type: "USER", payload: true });
             window.alert("Succesfully login");
            console.log("Succesfully login");
            
            history.push("/");
        }
    }


    return (
        <>
           <div className="signup-form ">
            <div className="container ">
                    
                            <div className="row">
                                 <div className="col-lg-6">
                                    <figure>
                                        <img src={loginpic} alt="signup" />
                        
                                    </figure>
                                    <NavLink to="/signup" className="signup-image-link" >Please reigter first</NavLink>
                                </div>
                                <div className="col-lg-6 ml-auto">
                                    <h2 className="form-title">Login</h2>
                                    <form method="POST" className="mt-5">
                                        
                                        <div className="form-group d-flex ">
                                            <label htmlFor="email">
                                                <i className="zmdi zmdi-email"></i>
                                            </label>
                                            <input type="email" name="email" id="email"
                                        value={email}
                                        onChange={(e)=> setEmail(e.target.value)}
                                            placeholder="Your Email"/>
                                        </div>
                                        
                            
                                        <div className="form-group d-flex ">
                                            <label htmlFor="password">
                                                <i className="zmdi zmdi-lock"></i>
                                            </label>
                                            <input type="password" name="password" id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                           autoComplete="off" placeholder="Your Password"/>
                                        </div>
                                    
                                        
                                        <input type="submit"  className="btn btn-primary" name="login" id="login" value="login" onClick={loginInput} />
                                        </form>
                                </div>
                               
                            </div>
                        </div>
                  
            
            </div>
        </>
    )
}

export default Login;