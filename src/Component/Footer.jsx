import React, { useRef, useState } from "react";
import "../Style/Footer.css";
import a1 from "../Assets/Play.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import a2 from "../Assets/ios.png";
import p1 from "../Assets/R.png";
import { Link } from "react-router-dom";
const Footer = () => {
  const ref = useRef()
  const [FieldValue, setFieldValue] = useState({
    title: "",
    img: "",
    description: ""
  })
  const LonchModel = (title) => {
    if (title === "AU") {
      setFieldValue(prevState => ({
        ...prevState,
        title: "About Us",
        img: p1,
        description: "This is a concise and informative description of our About Us page, providing insights into our team's expertise and dedication in delivering top-notch property damage solutions."
      }));
    } else if (title === 'CU') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Contact Us",
        img: p1,
        description: "This is a description of our Contact Us page, where you can reach out to us directly for inquiries, support, or any assistance regarding property damage concerns."
      }));
    } else if (title === 'CWU') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Carrers with us",
        img: p1,
        description: "This is a description of Careers with Us, where we offer exciting opportunities to join our dedicated team and contribute to our mission of delivering exceptional property damage services."
      }));
    } else if (title === 'T&C') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Terms & Conditions",
        img: p1,
        description: "Welcome to our Terms & Conditions page, where you can find a detailed description of the guidelines and agreements that govern your use of our propdam website and services."
      }));
    } else if (title === 'RI') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Request Info",
        img: p1,
        description: "Request Info: This section allows you to effortlessly connect with us, ensuring prompt assistance and personalized support for all your property damage inquiries."
      }));
    } else if (title === 'FB') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Feedback",
        img: p1,
        description: "This is a description of our Feedback page, where you can share your valuable thoughts and suggestions, helping us improve our services and better cater to your needs."
      }));
    } else if (title === 'RP') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Report a problem",
        img: p1,
        description: "This is a description of our Report a Problem feature, empowering users to easily notify us about property damages, ensuring swift action and effective resolution."
      }));
    } else if (title === 'TI') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Testimonials",
        img: p1,
        description: "This is a description of our Testimonials page, where you can read firsthand accounts of our satisfied clients, showcasing their positive experiences and the exceptional results we deliver."
      }));
    } else if (title === 'PP') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Privacy Policy",
        img: p1,
        description: "This is a description of our Privacy Policy, which outlines our commitment to safeguarding your personal information and maintaining strict confidentiality standards."
      }));
    } else if (title === 'SN') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Summons/Notices",
        img: p1,
        description: "Welcome to our Summons/Notices page, where you can find comprehensive descriptions and information about legal documents and notifications, ensuring you stay informed and prepared for any legal proceedings."
      }));
    } else if (title === 'GR') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Contact Us",
        img: p1,
        description: "This is a description of our Grievances page, where we provide a platform for addressing concerns and ensuring prompt resolution, prioritizing customer satisfaction and feedback."
      }));
    } else if (title === 'SG') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Safety Guide",
        img: p1,
        description: "This is a description of our Safety Guide, an invaluable resource offering comprehensive tips and guidelines to ensure the utmost safety and protection in various property-related situations."
      }));
    }
    else if (title === 'MA') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Mobile Apps",
        img: p1,
        description: "This is a description of our mobile app, designed to provide convenient access to our propdam services, empowering users to report and track property damage with ease."
      }));
    }
    else if (title === 'UR') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Our Services",
        img: p1,
        description: "This is a description of Our Services page, where you can explore the comprehensive range of property damage solutions we offer, tailored to meet your specific needs and ensure efficient restoration."
      }));
    }
    else if (title === 'PT') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Price Trends",
        img: p1,
        description: "This is a description of our Price Trends feature, providing valuable insights and analysis on property damage costs, empowering users to stay informed about market fluctuations and make informed decisions."
      }));
    }
    else if (title === 'BI') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Builder in India",
        img: p1,
        description: "This is a description of a reputable builder in India, specializing in constructing quality residential and commercial properties while maintaining a strong focus on customer satisfaction."
      }));
    }
    else if (title === 'AC') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Area Converter",
        img: p1,
        description: "This is a description of our Area Converter, a powerful tool that simplifies the process of converting between different units of area, saving you time and effort."
      }));
    }
    else if (title === 'AR') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Articles",
        img: p1,
        description: "This is a description of our Articles section, where we provide insightful and informative content related to property damage, restoration, and industry trends to empower and educate our readers."
      }));
    }
    else if (title === 'CS') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Customer Services",
        img: p1,
        description: "This is a description of our Customer Services, where we prioritize client satisfaction by delivering personalized assistance, prompt responses, and efficient solutions for all property damage-related concerns."
      }));
    }
    else if (title === 'ST') {
      setFieldValue(prevState => ({
        ...prevState,
        title: "Sitemap",
        img: p1,
        description: "This is a description of our Sitemap, a comprehensive guide that navigates you through our propdam website, ensuring easy access to all relevant information and services."
      }));
    }
    else {
      setFieldValue(prevState => ({
        ...prevState,
        title: "N/A",
        img: "N/A",
        description: "N/A"
      }));
    }
    ref.current.click()
  }
  return (
    <>
      <section>
        <div className="main-f">
          <div className="footer_top">
            <div className="container-fluid">
              <div className="inner-main-fpart">
                <Link to='/'><img className="p_logo" src={p1} alt="" /></Link>
                <div className="m-in">
                  <h3 className="in-text">FOLLOW US :</h3>
                  <div className="in-fb">
                    <Link>
                      {" "}
                      <button className="fb">
                        <FaFacebookF />
                      </button>{" "}
                    </Link>
                  </div>
                  <div className="in-insta">
                    <Link>
                      <button className="insta">
                        <FaInstagram />
                      </button>
                    </Link>
                  </div>
                  <div className="in-yt">
                    <Link>
                      <button className="yt">
                        <FaYoutube />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* footer inner part */}
          <div className="inner-info container-fluid">
            <div className="Propdam-part">
              <h3 className="p-h3">Propdam</h3>
              <p onClick={() => LonchModel('MA')}>Mobile Apps</p>
              <p onClick={() => LonchModel('UR')}>Our Services</p>
              <p onClick={() => LonchModel('PT')}>Price Trends</p>
              <p onClick={() => LonchModel('BI')}>Builder in India</p>
              <p onClick={() => LonchModel('AC')}>Area Converter</p>
              <p onClick={() => LonchModel('AR')}>Articles</p>
              <p onClick={() => LonchModel('CS')}>Customer Services</p>
              <p onClick={() => LonchModel('ST')}>Sitemap</p>
            </div>
            <div className="Company-part">
              <h3 className="p-h3">Company</h3>
              <p onClick={() => LonchModel('AU')}>About Us</p>
              <p onClick={() => LonchModel('CU')}>Contact Us</p>
              <p onClick={() => LonchModel('CWU')}>Carrers with us</p>
              <p onClick={() => LonchModel('T&C')}>Terms & Conditions</p>
              <p onClick={() => LonchModel('RI')}>Request Info</p>
              <p onClick={() => LonchModel('FB')}>Feedback</p>
              <p onClick={() => LonchModel('RP')}>Report a problem</p>
              <p onClick={() => LonchModel('TI')}>Testimonials</p>
              <p onClick={() => LonchModel('PP')}>Privacy Policy</p>
              <p onClick={() => LonchModel('SN')}>Summons/Notices</p>
              <p onClick={() => LonchModel('GR')}>Grievances</p>
              <p onClick={() => LonchModel('SG')}>Safety Guide</p>
            </div>
            <div className="Contact-us-part">
              <h3 className="p-h3">Contact Us</h3>
              <p>Toll Free - 0000 41 9909</p>
              <p>Email: Info@propdam.com</p>
              <img className="play-f-img" src={a1} alt="" /> <br />
              <img className="play-f-img" src={a2} alt="" />
              <p>
                All trademarks are the property <br /> of their respective
                owners.
              </p>
              <p>
                All rights reserved - Secure <br /> Nurture Pvt Ltd.
              </p>
            </div>
            <div className="Subscribe-part">
              <h3 className="p-h3">Subscribe</h3>
              <div className="sub-inner">
                <p>
                  Subscribe to our newsletter and stay updated on the latest
                  price and special offers!
                </p>
                <input
                  className="in1"
                  type="text"
                  placeholder="Enter Email Address...."
                />
                <button className="sub-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <div>
        <div>
          <button style={{ display: "none" }} ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1">
            Launch demo modal
          </button>
          <div className="modal fade" id="exampleModal1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog ">
              <div className="modal-content  model-box">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel"><h6 className="footer-model-title">{FieldValue.title}</h6></h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  <img style={{ width: "100px" }} src={FieldValue.img} alt="img" />
                  <br />
                  <br />
                  <h4 className="footer-model">{FieldValue.description}</h4>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Ok</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}

    </>
  );
};
export default Footer;