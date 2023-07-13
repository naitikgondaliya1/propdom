import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import "../Style/CustomerService.css";
import axios from "axios";
import apiConst from "../GlobalConst/ApiKeys";
const CustomerService = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const [allComplain, setAllComplain] = useState({
    name: '',
    email: '',
    mobaileNumber: '',
    subject: '',
    message: ''
  })

  const onChange = (e) => {
    setAllComplain({ ...allComplain, [e.target.name]: e.target.value });
  }

  const addComplain = (e) => {
    e.preventDefault();

    var data = JSON.stringify({
      "name": allComplain.name,
      "email": allComplain.email,
      "mobaileNumber": allComplain.mobaileNumber,
      "subject": allComplain.subject,
      "message": allComplain.message
    });

    var config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: apiConst.add_complain,
      headers: {
        'Content-Type': 'application/json',
        'authToken_user': localStorage.getItem("User_token")
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert('Response Send')
      })
      .catch(function (error) {
        console.log(error);
        alert('Please login first');
      });
  }

  function handleKeyDown(event) {
    const maxLength = 10;
    const inputValue = event.target.value;

    if (inputValue.length >= maxLength && event.key !== 'Backspace') {
      event.preventDefault();
    }
  }

  return (
    <>
      <Navbar />
      <section className="container-fluid">
        <div className="customerCard">
          <form onSubmit={addComplain}>
            <div className="first_input">
              <input type="text" placeholder="Name" name="name" onChange={onChange} />
              <input type="text" placeholder="Email" name="email" onChange={onChange} />
            </div>
            <div className="second_input">
              <input type="text" placeholder="Subject" name="subject" onChange={onChange} />
              <input type="number" placeholder="Mobile" name="mobaileNumber" onChange={onChange} onKeyDown={handleKeyDown}/>
            </div>
            <div className="message">
              <textarea
                id="w3review"
                name="message"
                rows="8"
                cols="50"
                placeholder="Write Message" onChange={onChange}
              ></textarea>
            </div>
            <div className="msgBtn">
              <button type="submit">SEND MESSAGE</button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CustomerService;
