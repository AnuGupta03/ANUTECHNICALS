import { NavLink } from "react-router-dom";
import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/auth"; 


export const About = () => {
    const { user } = useAuth();
        return ( 
            <> 
             <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>Welcome, {user ? `${user.username} to our website` : `to our website`} </p>
                            <h1>Why Choose Us?.</h1>
                            <p>
                            Experties: Our team consists of experienced IT professionals who are
                            passionate about staying up-to-date with it latest industry Trends.
                            </p>                       
                            <p>Customization: We understand that every business is unique. That's why
                            we create solutions that are Tailored to your specific needs and goals.</p>
                            <p>
                            Customer-centric Approach: We prioritize your satisfaction and provide 
                            top-notch support to address your IT concerns.</p>
                            <p>
                            Affordability: We offer compatitive pricing without compromising on the 
                            quality of our services.
                            </p>
                            <p>
                            Reliability: Count On us to be there when you need us. We're committed 
                            to ensuring your IT environment is reliable and available 24/7.   
                            </p> 
                            <div className="btn btn-group">
                                <NavLink to="/contact">
                                    <button className="btn">Connect Now</button>
                                </NavLink>
                                <button className="btn secondary-btn">learn more</button>
                            </div>
                        </div>
                        {/* hero images */}
                        <div className="hero-image"> 
                            <img src="/images/about.png"  
                                 alt="This is About Page."
                                 width= "500" 
                                 height= "500" 
                            />
                        </div>
                    </div>    
                </section>
             </main>
             {/* 2nd Section */}
             <Analytics />
            </>
        );
    };
    