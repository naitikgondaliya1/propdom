//https://propdam.mhindia.in/
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import "../Style/Login.css"
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import axios from 'axios'
import apiConst from '../GlobalConst/ApiKeys'


const Login = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);

  //------------------ Verify OTP --------------------- 

  const handleChange = (e, index) => {
    const value = e.target.value;
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;
      return newOtp;
    });
    if (value !== '') {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    } else {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text/plain').slice(0, 4);
    const newOtp = [...otp];
    for (let i = 0; i < pasteData.length; i++) {
      newOtp[i] = pasteData[i];
    }
    setOtp(newOtp);
  };

  //------------------ Verify OTP --------------------- 

  //------------------ Send OTP --------------------- 

  const handleSubmit = (e) => {
    setShowOtpInput(true);
    e.preventDefault();

    var data = JSON.stringify({
      "mobile": mobile
    });
    console.log(data);

    var config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: apiConst.send_otp_login,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(response);
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //------------------ Send OTP --------------------- 


  //-------------------OTP Varifications------------------


  const inputRefs = useRef([]);

  const [mobile, setmobile] = useState();

  const GetMobileNo = (e) => {
    setmobile(e.target.value)
  }

  const VerifyOtp = (e) => {
    e.preventDefault();
    console.log(mobile, otp)
    const okOtp = otp.join('')

    const data = {
      mobile: mobile,
      otp: okOtp
    };

    console.log(data);

    var config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: apiConst.login,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then((response) => {
        console.log(response.data.message);
        console.log(response.data);
        if (response.data.authtoken) {
          localStorage.setItem('User_token', response.data.authtoken);
          alert('Login successful')
        }
      })
      .catch((error) => {
        console.log(error);
        alert('Login failed');
      });
  }

  // const SetToken = () => {
  //   localStorage.setItem('token', response)
  //   // window.location.href = '/filter'
  // }
  function handleKeyDown(event) {
    const maxLength = 10;
    const inputValue = event.target.value;

    if (inputValue.length >= maxLength && event.key !== 'Backspace') {
      event.preventDefault();
    }
  }

  function onlyOneOtp(event) {
    const maxLength = 1;
    const inputValue = event.target.value;

    if (inputValue.length >= maxLength && event.key !== 'Backspace') {
      event.preventDefault();
    }
  }

  //OTP Varifications

  return (
    <>
      <Navbar />
      <div className="container123">
        <div className='logo1234'>
          <img src={require('../Assets/R.png')} alt="" />
        </div>

        <div className='form-width '>
          <form className='form' onSubmit={handleSubmit}>
            <div>
              <input
                className='txt-mo'
                onChange={GetMobileNo}
                required
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Enter Mobile Number"
                onKeyDown={handleKeyDown}
                name="mobile"
              />
            </div>
            <div htmlFor="" className='p-3 t-and-c'>
              <input type="checkbox" name="" id="" required />
              <span className='ps-2 text-letf'>Terms & Conditions</span>
            </div>
            {showOtpInput ?
              <>
                <div className='input-otp'>
                  <input
                    type="number"
                    maxLength="1"
                    required
                    value={otp[0]}
                    onChange={(e) => handleChange(e, 0)}
                    onPaste={handlePaste}
                    ref={(ref) => (inputRefs.current[0] = ref)}
                    onKeyDown={onlyOneOtp}
                    name="otp"
                  />
                  <input
                    type="number"
                    maxLength="1"
                    required
                    value={otp[1]}
                    onChange={(e) => handleChange(e, 1)}
                    onPaste={handlePaste}
                    ref={(ref) => (inputRefs.current[1] = ref)}
                    onKeyDown={onlyOneOtp}
                    name="otp"
                  />
                  <input
                    type="number"
                    maxLength="1"
                    required
                    value={otp[2]}
                    onChange={(e) => handleChange(e, 2)}
                    onPaste={handlePaste}
                    ref={(ref) => (inputRefs.current[2] = ref)}
                    onKeyDown={onlyOneOtp}
                    name="otp"
                  />
                  <input
                    type="number"
                    maxLength="1"
                    required
                    value={otp[3]}
                    onChange={(e) => handleChange(e, 3)}
                    onPaste={handlePaste}
                    ref={(ref) => (inputRefs.current[3] = ref)}
                    onKeyDown={onlyOneOtp}
                    name="otp"
                  />
                </div>
                <button onClick={VerifyOtp} className='sentopt-btn'>Verify OTP</button>
              </>
              :
              <div className='send-otp-login'>
                <button type='submit' className='sentopt-btn'>Sent otp</button>
              </div>
            }
            <div className='p-3 mt-4'>
              <span>Don't have an account?</span> <Link to='/register'><button className='create-btn'>Create new</button></Link>
            </div>
          </form>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Login