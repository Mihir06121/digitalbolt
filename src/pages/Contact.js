import { useRef } from "react";
import Footer from "../components/Footer"
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import emailjs from "@emailjs/browser";

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#f0ad4e',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#f0ad4e',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#f0ad4e',
      },
      '&:hover fieldset': {
        borderColor: '#f0ad4e',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#f0ad4e',
      },
    },
  });

const Contact = () => {

    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current)
        emailjs.sendForm("service_vkgrvue", "template_nrgjifn", form.current, "FLv9a2UUero-LL3RF").then(
          (result) => {
            alert("Message Sent Successfully, Check your inbox for confirmation");
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      };

    return (
        <div className="">
            <div className="">
                <div className="d-flex justify-content-center align-items-center py-2 py-md-5 bg_body" data-aos="fade-down" data-aos-delay="200">
                    <div className="text-center" data-aos="fade-down" data-aos-delay="400" data-aos-duration="200" >
                        <span className="display-1"><b>Contact Us</b></span>
                        <div className="d-flex justify-content-end" data-aos="fade-right" data-aos-delay="500">
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="py-3 py-md-5">
                    <div className="mx-auto col-10 col-md-8">
                    <div className="py-md-5 py-3">
                        <div className="container p-md-5 p-2 d-flex justify-content-center align-items-center" >
                            <div className="col-md-6">
                                <form className='form-group' ref={form} onSubmit={sendEmail}>
                                    <div className='form-group p-2'>
                                        <CssTextField style={{width: "100%"}} id="custom-css-outlined-input" name="user_name" label="Enter your name" variant="outlined" required={true} />
                                    </div>
                                    <div className='form-group p-2'>
                                        <CssTextField style={{width: "100%"}} id="custom-css-outlined-input" name="user_email" label="Enter your email" type={"email"} variant="outlined" required={true} />
                                    </div>
                                    <div className='form-group p-2'>
                                        <CssTextField style={{width: "100%"}} id="custom-css-outlined-input" inputMode="decimal" name="user_phoneNumber" label="Enter your number" type={"number"} variant="outlined" required={true} />
                                    </div>
                                    <div className='form-group p-2'>
                                        <CssTextField style={{width: "100%"}} id="custom-css-outlined-input" multiline rows={4} name="message" label="Enter your message" variant="outlined" required={true} />    
                                    </div>
                                    <div className='p-2' >
                                        <button className='ue_btn col-12 btn btn-sm animated-button thar-three px-3 px-lg-4 py-2' type="submit" style={{color: '#664229', margin:0}}>
                                            <strong>Send</strong>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact