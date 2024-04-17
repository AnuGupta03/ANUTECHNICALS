import { useState } from "react";
import { useAuth } from "../store/auth"; 
import { toast } from "react-toastify";

const defaultContactFormData ={
    username: "",
    email: "",
    message: "", 
};

export const Contact = () => {

    const[contact, setContact] = useState({defaultContactFormData});

    const [userData, setUserData] = useState(true);

    const { user } = useAuth();

    if(userData && user){
        setContact({
            username: user.username,
            email: user.email,
            message: "",
        });

        setUserData(false);
    }


    // Lets tackle our handleInput
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]: value,
        });
    };

    // handle form getFormSubmissionInfo
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(contact);

    try {
        const response= await fetch("http://localhost:5000/api/form/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body:JSON.stringify(contact),

        });

        if (response.ok){
            setContact(defaultContactFormData);
            const data = await response.json();
            console.log(data);
            toast.success("Message Send Successfully");
        }

    } catch (error) {
        toast.error("Message Not Send");
        console.log(error);
        }
    };

    return (
        <>
            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">Contact Us.</h1>
                </div>
                {/* contact page main */}
                <div className="container grid grid-two-cols">
                    <div className="contact-img">
                        <img src = "/images/contact.png" 
                            alt = "Contact Page is not working"
                            height="400"
                            width="400"
                        />
                    </div>
                {/* contact form content actual */}
                <section className="section-form">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">username</label>
                            <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            autoComplete="off"
                            value={contact.username}
                            onChange={handleInput}
                            required/>
                        </div>

                        <div>
                            <label htmlFor="email">email</label>
                            <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            autoComplete="off" 
                            value={contact.email}
                            onChange={handleInput}
                            required/>
                        </div>

                        <div>
                            <label htmlFor="message">message</label>
                                <textarea name="message" 
                                            id="message"
                                            autoComplete="off"
                                            value={contact.message}
                                            onChange={handleInput}
                                            required 
                                            cols="30" 
                                            rows="6"
                                ></textarea>
                        </div>

                        <div>
                            <button type="submit" className="btn btn-submit">submit</button>
                        </div>

                    </form>
                </section>
                </div>

                <section className="mb-3">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5149709214543!2d75.93272700843758!3d22.746262479282322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e3cd9d3de1ad%3A0xebaf3ee69f583ff5!2sPhoenix%20Citadel%20Mall!5e0!3m2!1sen!2sin!4v1710935397398!5m2!1sen!2sin" width="100%" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">                    
                    </iframe>
                </section> 
            </section>
        </>
    );
};
