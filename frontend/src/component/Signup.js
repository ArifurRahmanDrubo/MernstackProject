import React ,{useState} from 'react'
import { NavLink , useHistory } from 'react-router-dom';
import signupic from "../images/Signup.png"
const Signup = () => {

    const history = useHistory();
    const [user, setuser] = useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: ""
    });

    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
      
        setuser({ ...user, [name]: value });
    }
    
    const postMan = async (e) => {
        e.preventDefault();

        const { name, email, phone, work, password, cpassword, } = user;
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        });

        const data = await res.json();

        if (res.status === 422 || !data) {
            window.alert("Inavalid Registration");
            console.log("Inavlid registration");
        }
        else {
             window.alert("Succesfully Registration");
            console.log("Succesfully registration");
            
            history.push("/login");
        }
    }



    return (
        <>
           <div className="signup-form ">
            <div className="container ">
                        
                            <div className="row  ">
                                <div className="col-lg-6 mr-auto">
                                    <h2 className="form-title">Signup</h2>
                                    <form method="POST" className="/" id="register-form">
                                        <div className="form-group d-flex ">
                                            <label htmlFor="name">
                                                <i className="zmdi zmdi-account"></i>
                                            </label>
                                            <input type="text" name="name" id="name" value={user.name} onChange={handleInputs}       placeholder="Your Name"/>
                                        </div>
                                        <div className="form-group d-flex ">
                                            <label htmlFor="email">
                                                <i className="zmdi zmdi-email"></i>
                                            </label>
                                            <input type="email" name="email" id="email" value={user.email} onChange={handleInputs}        placeholder="Your Email"/>
                                        </div>
                                        <div className="form-group d-flex ">
                                            <label htmlFor="phone">
                                                <i className="zmdi zmdi-phone-in-talk"></i>
                                            </label>
                                            <input type="number" name="phone" id="phone" value={user.phone}  onChange={handleInputs}       placeholder="Your Phone"/>
                                        </div>
                                        <div className="form-group d-flex ">
                                            <label htmlFor="work">
                                                <i className="zmdi zmdi-slideshow"></i>
                                            </label>
                                            <input type="text" name="work" id="work" value={user.work} onChange={handleInputs}        placeholder="Your Profession"/>
                                        </div>
                                        <div className="form-group d-flex ">
                                            <label htmlFor="password">
                                                <i className="zmdi zmdi-lock"></i>
                                            </label>
                                            <input type="password" name="password" id="password" value={user.password}  onChange={handleInputs}      placeholder="Your Password"/>
                                        </div>
                                        <div className="form-group d-flex ">
                                            <label htmlFor="cpassword">
                                                <i className="zmdi zmdi-lock"></i>
                                            </label>
                                            <input type="password" name="cpassword" id="cpassword" value={user.cpassword}  onChange={handleInputs}      placeholder="Your Confirm Password"/>
                                        </div>
                                        
                                        <input type="submit"  className="btn btn-primary" name="signup" id="signup" value="register" onClick={postMan} />
                                        </form>
                                </div>
                                <div className="col-lg-6 signup-img">
                                    <figure >
                                        <img src={signupic} alt="signup" />
                        
                                    </figure>
                                    <NavLink to="/login" className="signup-image-link" >I am allready register</NavLink>
                                </div>
                            </div>
                       
                    
              </div>
            
            </div>
        </>
    )
}

export default Signup;