const About = () => {
    return (
        <div className="py-md-3">      
            <div className="about_banner_div text-center" data-aos="fade-in" data-aos-delay="500">
                <div className="d-md-none d-block container-fluid d-flex justify-content-center align-items-center " style={{height: '40vh'}}>
                    <div className="text-white py-3 py-md-5 display-1" data-aos="fade-up" data-aos-delay="500">
                        <p style={{textShadow: '0px 0px 10px grey', fontSize: '20vw'}}><b>About Us</b>
                        </p>
                    </div>
                </div>
                <div className="d-md-block d-none container-fluid d-flex justify-content-center align-items-center " style={{height: '50vh'}}>
                    <div className="text-white py-3 py-md-5 display-1" data-aos="fade-up" data-aos-delay="500">
                        <p style={{textShadow: '0px 0px 10px grey',  fontSize: '10vw'}}><b>About Us</b>
                        </p>
                    </div>
                </div>
            </div>
            <div className="py-md-5 p-2 d-flex justify-content-center align-items-center">
                <div className="container-fluid col-md-8 col-10 fs-4" data-aos="fade-up" data-aos-delay="300">
                    <p className="text-justify">
                        Digital Bolt Private Limited, a part of the esteemed Kumbhar Group of Companies, offers a diverse range of services, including SDLC Consulting, 
                        Cloud Consulting, Application Development, and Digital Transformation Audit. 
                        With a global presence, we serve clients across 27countries, providing tailored solutions to meet their unique needs.
                        Under the visionary leadership of Managing Director Zek Furtado, 
                        we strive to deliver cutting-edge solutions that empower businesses in the fast-paced digital landscape. 
                        Committed to excellence and innovation, we foster long-lasting partnerships with our clients, ensuring their success through technology-driven 
                        strategies. At Digital Bolt, we prioritize customer satisfaction and growth, driving transformation for businesses worldwide.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About