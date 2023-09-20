import React,{useEffect, useState} from 'react';

const Contact = () => {

const [userData, setuserDate] = useState({name:"", email:"", phone:"", message:""});

    const userContact = async() =>{
        try {
            const res = await fetch("/getData", {
                method: "GET",
                headers: {
                    
                    "Content-Type": "application/json"
                }
                
            });
            const data = await res.json();
            console.log(data);

            setuserDate({...userData, name:data.name,email:data.email,phone:data.phone,message:data.message});

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        userContact();
    }, []);

    const handleinput = (e) => {
       
        const name = e.target.name;
        const value = e.target.value;
        
        setuserDate({...userData, [name]:value})
    }

    const contactForm = async (e) => {
        e.preventDefault();
        const { name, email, phone, message } = userData;

        const res = await fetch("/contact", {
                method: "POST",
                headers: {
                    
                    "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, message 
            })
                
            });
            const data = await res.json();
        if (!data){
                console.log("message not send")
        }
        else {
            window.alert("message sent succesfully");
            setuserDate({ ...userData, message: "" });
        }

    }


    return (
        <>
             <section className="contact section" id="contact">
          <div className="container">
              <div className="row">
                <div className="form-header-info mt-5 d-flex ">
                  <div className="contact-info-item   ">
                      <div className="icon"><i className="zmdi zmdi-phone"></i></div>
                      <h4>Call us on</h4>
                      <p>01955937326</p>
                  </div>
               
                  <div className="contact-info-item  mr-5 ">
                      <div className="icon"><i className="zmdi zmdi-grid"></i></div>
                      <h4>Office</h4>
                      <p> 290 Jurain, Dhaka</p>
                  </div>
                  
                  <div className="contact-info-item  ">
                      <div className="icon"><i className="zmdi zmdi-comment-alt"></i></div>
                      <h4> Email</h4>
                      <p> arifurrahmandrubo121@gmail.com</p>
                  </div>
                  </div>
                 
              </div>     
            <div className="contact-form-container">
                 <div className="mb-5 form-title">
                            <h2 >Get In Touch</h2>
                  </div>
                     <form method="POST" className="contact-form ">
                         <div className="row">
                             <div className="form-item col-md-4 ">
                                 <div className="contact-form-group">
                                        <input type="text" name="name" id="name" className="form-control"
                                            value={userData.name} 
                                            onChange={handleinput}
                                            placeholder="Name*" required />
                                 </div>
                             </div>
                             <div className="form-item col-md-4 ">
                                 <div className="contact-form-group">
                                        <input type="email" name="email" id="email" className="form-control"
                                            value={userData.email} 

                                            onChange={handleinput}
                                            placeholder="Email*" required />
                                 </div>
                                </div>
                             <div className="form-item col-md-4 ">
                                 <div className="contact-form-group">
                                        <input type="text" name="phone" id="phone" className="form-control"
                                            value={userData.phone}
                                            

                                            onChange={handleinput}
                                            placeholder="Phone*" required />
                                 </div>
                             </div>   
                         </div>
                         
                         <div className="row">
                             <div className="form-item col-12 ">
                                 <div className="contact-form-group">
                                        <textarea className="form-control" name="message" id="message" cols="10" rows="5"
                                            value={userData.message}
                                            onChange={handleinput}
                                            placeholder="Your Message......" required></textarea>
                                 </div>
                             </div>
                         </div>
                         <div className="row">
                             <div className=" col-12 ">
                                 <input type="submit"  className="btn btn-primary mt-3 message-btn ml-auto" name="message" id="message" value=" Send Message" onClick={contactForm} />
                             </div>
                         </div>
                     </form >
                  
                 </div>
           
              
          </div>
      </section>
        </>
    )
}

export default Contact;