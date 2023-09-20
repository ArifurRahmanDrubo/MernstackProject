import React ,{useState,useEffect} from 'react'

const Home = () => {

    const [userName, setuserName] = useState("");
    const [show, setShow] = useState(false);

    const userHome = async() =>{
        try {
            const res = await fetch("/getData", {
                method: "GET",
                headers: {
                    
                    "Content-Type": "application/json"
                }
                
            });
            const data = await res.json();
            console.log(data);

            setuserName(data.name);
            setShow(true);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        userHome();
    }, []);





    return (
        <>
            <main>
            <div className="home-section">
                <div className="home-info">
                        <p>Welcome</p>
                        <h1>{userName}</h1>
                        <h2>{ show? "Happy To See You": "We are the mern Developer" }</h2>
                </div>
                 
                
               
                </div>
                </main>
        </>
    )
}

export default Home;
