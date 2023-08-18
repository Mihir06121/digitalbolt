import {
    AiFillInstagram,
    AiFillFacebook,
    AiFillPhone
  } from "react-icons/ai";

const Footer = () => {

  let date = new Date();
  let year = date.getFullYear()

    return (
        <div style={{backgroundColor: '#f0ad4e', textAlign: "center"}}  className="p-3 p-md-5">
            <hr className="mx-5" style={{backgroundColor: '#664229'}}/>
            <div className="row py-3 py-md-4">
                <div className="col-md-6 col-12">
                    <div className="">
                        <h2>Phone</h2>
                        <div>
                            <a className="text-dark" href="tel: +91 70398 46084"><h4>+91 70398 46084</h4></a> <br/>
                            <a className="text-dark" href="tel: +91 93235 26511"><h4>+91 93235 26511</h4></a> 
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-12">
                    <div className="">
                        <h2>Email</h2>
                        <div>
                            <a className="text-dark" href="mailto:business@digitalbolt.co"><h4>business@digitalbolt.co</h4></a>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mx-5" style={{backgroundColor: '#664229'}}/>
            <div className="text-center" >
                <span>Copyright © {year} Digitalbolt</span>
            </div>
        </div>
    )
}

export default Footer