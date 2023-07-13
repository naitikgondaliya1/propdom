import React, { useRef } from 'react'
import "../Style/Navbar.css"
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import apiConst from '../GlobalConst/ApiKeys'
import axios from 'axios'


const Navbar = () => {
    const userdata = localStorage.getItem('User_token')
    const refColse = useRef()
    const [QueryAsk, setQueryAsk] = useState({
        message: '',
    })
    const onChange = (e) => {
        setQueryAsk({ ...QueryAsk, [e.target.name]: e.target.value });
    }
    const addMessage = (e) => {
        // e.preventDefault();


        var data = JSON.stringify({
            "description": QueryAsk.message
        });

        var config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: apiConst.askquery,
            headers: {
                'Content-Type': 'application/json',
                'authToken_user': localStorage.getItem("User_token")
            },
            data: data
        };
        // alert(config.data)
        console.log(QueryAsk);

        axios(config)
            .then(function (response) {
                if (response.data.status) {
                    refColse.current.click()
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container container">
                    <input type="checkbox" name="" id="" />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menu-items">
                        <NavLink to="/plans" className={({ isActive }) => (isActive ? "active" : 'none')}><li>Plans</li></NavLink>
                        <NavLink to="/CustomerService" className={({ isActive }) => (isActive ? "active" : 'none')}><li>Customer Service</li></NavLink>
                        <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : 'none')}><li>Login</li></NavLink>
                        {!userdata ? (
                            <></>
                        ) : (
                            <button type="button" className="btn p-2 btn-warning" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Ask Query</button>
                        )}
                    </ul>
                    <Link style={{ zIndex: "0" }} to='/'><img src={require("../Assets/R.png")} alt="" className="logo123" /></Link>
                </div>
            </nav>
            <div>
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ask Qurey</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="recipient-name" className="col-form-label">Description : </label>

                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" id="message-text" name="message" defaultValue={""} onChange={onChange} />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" ref={refColse} data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={addMessage}>Send message</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Navbar