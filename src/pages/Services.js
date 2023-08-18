import dta from '../assets/digital_tranform.jpg'
import appd from '../assets/app_dev.jpg'
import dtc from '../assets/digital_tranform_consult.png'

const Services = () => {
    return (
        <div className="py-md-3">      
            <div className="about_banner_div text-center" data-aos="fade-in" data-aos-delay="500">
                <div className="d-md-none d-block container-fluid d-flex justify-content-center align-items-center " style={{height: '40vh'}}>
                    <div className="text-white py-3 py-md-5 display-1"  data-aos="fade-up" data-aos-delay="500">
                        <p style={{textShadow: '0px 0px 10px grey', fontSize: '20vw'}}><b>Services</b>
                        </p>
                    </div>
                </div>
                <div className="d-md-block d-none container-fluid d-flex justify-content-center align-items-center " style={{height: '50vh'}}>
                    <div className="text-white py-3 py-md-5 display-1"  data-aos="fade-up" data-aos-delay="500">
                        <p style={{textShadow: '0px 0px 10px grey',  fontSize: '10vw'}}><b>Services</b>
                        </p>
                    </div>
                </div>
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
    )
}

export default Services