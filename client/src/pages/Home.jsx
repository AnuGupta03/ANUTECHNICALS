import { Analytics } from "../components/Analytics";

export const Home = () => {
    return  (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p> We Are the World Best IT Company</p>
                            <h1>Welcome to Anu Technical</h1>
                            <p>
                                    Are you ready to take your business to the next level with cutting-edge IT solutions? Look no future! At
                                    Anu Technical, we specialize in providing innovation IT services and solutions and solutions tailored to 
                                    meet your unique needs.
                            </p>
                            <div className="btn btn-group">
                                <a href="/contact">
                                    <button className="btn">connect now</button>
                                </a>
                                <a href="/services">
                                    <button className="btn secondary-btn">learn more</button>
                                </a>
                            </div>
                        </div>
                        {/* hero images */}
                        <div className="hero-image"> 
                            <img src="/images/home.png"  
                                alt="This is Image Page."
                                width= "500" 
                                height= "500" 
                            />
                        </div>
                    </div>
                </section>                
            </main>

            {/* 2nd Section */}
            <Analytics />

         {/* 3rd Section */}
         <section className="section-hero">
                <div className="container grid grid-two-cols">
                    {/* hero images */}
                    <div className="hero-image"> 
                        <img src="/images/design.png"  
                             alt="This is Image Page."
                             width= "500" 
                             height= "500" 
                        />
                    </div>

                    <div className="hero-content">
                        <p>We Are here to help you.</p>
                        <h1>Get Started Today.</h1>
                        <p>
                        Ready to take the first step towards a more efficient and Secure 
                        IT infrastructure? Contact us today for a free consultation and 
                        let's discuss how Anu Technical can help your business thrive in
                        the digital age.                        
                        </p>
                        <div className="btn btn-group">
                            <a href="/contact">
                                <button className="btn">connect now</button>
                            </a>
                            <a href="/services">
                                <button className="btn secondary-btn">learn more</button>
                            </a>
                        </div>
                    </div>
                </div>    
            </section>
        </>
        
    );
};
