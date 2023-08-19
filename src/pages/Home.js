import { Link } from "react-router-dom";
import dta from '../assets/digital_tranform.jpg'
import appd from '../assets/app_dev.jpg'
import dtc from '../assets/digital_tranform_consult.png'
const Home = () => {

  const onTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }

  return (
    <div>
      <div className="home_banner_div" data-aos="fade-in" data-aos-delay="300">
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{height: "80vh"}}>
          <div className="col-md-8 col-10" >
            <div>
              <h1 className="text-white py-3 py-md-5 display-1"  data-aos="fade-up" data-aos-delay="500">
                <strong>
                  Unlocking Opportunities
                  in the Digital
                  Landscape
                </strong>
              </h1>
              <h2 className="display-4 text-white" data-aos="fade-up" data-aos-delay="800">
                Analyze | Optimize | Digitize
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="flip-left">
      {/* <hr className="mx-auto col-md-6 col-10" style={{padding: '0.1rem'}}/> */}
      </div>
      <div className="py-3 py-md-5">
        <div className="mx-auto d-flex justify-content-center align-items-center">
          <div className="p-md-5 p-3 row container-fluid d-flex justify-content-center align-items-center">
            <div className="col-md-3">
              <div className="display-1 text-center" data-aos="fade-up" data-aos-delay="700">
                About Us
              </div>
            </div>
            <div className="col-md-5 pt-3" style={{textAlign: 'justify'}} data-aos="fade-up" data-aos-delay="300">
              <h4 className="">
              Digital Bolt Private Limited, part of the esteemed Kumbhar Group, offers diverse services including SDLC and Cloud Consulting, 
              Application Development, and Digital Transformation Audit. With global presence in 27 countries, under MD Zek Furtado's leadership, 
              they provide tailored technology solutions, prioritize customer satisfaction, and drive business transformation worldwide.
              </h4>
              <Link to="/about">
                <button onClick={() => onTop()} className="btn-outline-warning btn btn-sm">
                  Know More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        <div className="col-md-8 col-10">
          <hr/>
        </div>
      </div>
      <div className="container-fluid">
        <div className="text-center display-1 pb-5" data-aos="fade-up" data-aos-delay="500">
          Services
        </div>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <div className="row col-md-8 col-12">
            <div className="col-sm-4 py-3 d-flex align-items-center align-items-stretch" 
             data-aos="fade-up" data-aos-delay="700">
              <div className="card border-0 shadow">
                  <img src={dta} className="card-img-top" alt="Digital Transformation Audit"/>
                <div className="card-body">
                  <h5 className="card-title"><strong className="fs-4">Digital Transformation Audit</strong></h5>
                  <hr/>
                  <p className="card-text">We perform both, Pre and Post Digital Transformation Audits. 
                  These audits help your organization understand digital transformation needs specific to your operations.</p>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
            </div>
            <div className="col-sm-4 py-3 d-flex align-items-center align-items-stretch" 
             data-aos="fade-up" data-aos-delay="800">
              <div className="card border-0 shadow">
                  <img src={appd} className="card-img-top" alt="Application Development"/>
                <div className="card-body">
                  <h5 className="card-title"><strong className="fs-4">Application Development</strong></h5>
                  <hr/>
                  <p className="card-text">We meticulously engineer applications for Android, iOS, and Web platforms. 
                  We also build custom tools that automate and speed up the internal operations of your business.</p>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
            </div>
            <div className="col-sm-4 py-3 d-flex align-items-center align-items-stretch" 
             data-aos="fade-up" data-aos-delay="900">
              <div className="card border-0 shadow">
                  <img src={dtc} className="card-img-top" alt="Digital Transformation Consulting"/>
                <div className="card-body">
                  <h5 className="card-title"><strong className="fs-4">Digital Transformation Consulting</strong></h5>
                  <hr/>
                  <p className="card-text">We provide consultancy services such as SDLC Consulting, 
                  Cloud Consulting, and Process Digitization that help understand how to migrate your organization's manual processes to the digital space.</p>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;