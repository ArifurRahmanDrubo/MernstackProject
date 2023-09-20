import React,{useEffect, useState} from 'react';
import { NavLink ,useHistory} from 'react-router-dom';
import signupic from "../images/Signup.png"


const About = () => {
    const history = useHistory();

    const [userData, setuserDate] = useState({});

    const callAboutpage = async() =>{
        try {
            const res = await fetch("/about", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            console.log(data);

            setuserDate(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {

            history.push("/login");
        }
    }

    useEffect(() => {
        callAboutpage()
    }, []);



    return (
        <>
            <div className="about-me">
                <div className="container">
                    <form method="GET" >
                    <div className="row">
                        <div className=" col-md-4 ">
                                <div className="about-img">
                                    <img src={signupic} alt="signup" />
                            </div>
                            </div>
                            <div className=" col-md-6 ">
                                <div className="about-info">
                                    <h5>{userData.name} </h5>
                                    <h6 > {userData.work} </h6>
                                    <p className="profile-rating mt-3" > WORKING <span>1/10</span> </p>
                                    <ul className="nav nav-tabs mt-5" role="tablist" >
                                    <li className="nav-item">
                                        <a className="nav-link " id="home-tab" data-toggle="tab" role="tab" href="#home">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active " id="profile-tab" data-toggle="tab" role="tab" href="#profile">TimeLine</a>
                                    </li>
                                    
                                    </ul>
                            </div>
                            </div>
                            <div className=" col-md-2 ">
                                <div className="edit-profile">
                                    <input type="submit" className="edit-profile-btn btn" value="Edit Profile" />
                            </div>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-link">
                                    <p>Work Link</p>
                                    <NavLink to="" target="_arif" >Youtber</NavLink> <br/>
                                    <NavLink to="" target="_arif" >Web Developer</NavLink> <br />
                                    <NavLink to="" target="_arif" >Web Designer</NavLink> <br />
                                    <NavLink to="" target="_arif" >Bootstrap</NavLink> <br />
                                    <NavLink to="" target="_arif" >Mernstark</NavLink> <br />
                                    <NavLink to="" target="_arif" >Freelancer</NavLink> <br />
                                 
                                </div>

                            </div>
                            <div className="col-md-8  about-detail">
                                <div className="tab-content profile-tab" id="mycontenttab" >
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" >
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>2683969967678</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{ userData.name}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>arifurrahmandrubo121@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userData.work}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userData.phone}</p>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className="tab-pane fade " id="profile" role="tabpanel" aria-labelledby="profile-tab" >
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Exprience</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>5$</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Availablity</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Morning</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                             </div>
                        </div>
                    </form>
                </div>
           </div>
        </>
    )
}

export default About;