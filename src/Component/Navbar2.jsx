import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Navbar.css'

function Navbar2() {
    return (
        <>
            <nav className="navbar1234">
                <div className="navbar-container1234 container1234">
                    <input type="checkbox" name="" id="" />
                    <div className="hamburger-lines1234">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menu-items1234">
                        <div className='flex align-items-center'>
                            <input type="text" className='' placeholder='search by locality' />
                            <i className="fa-solid fa-magnifying-glass search-123"></i>
                        </div>
                        <div className="pokl">
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/CustomerService">Customer Service</Link></li>
                            <li><Link to="/plans">Plans</Link></li>
                            <li style={{border:"none"}}><i className="orange fa-solid fa-bell"></i></li>
                        </div>
                    </ul>
                    <Link to='/'><img src={require("../Assets/R.png")} alt="" className="logo123" /></Link>
                </div>
            </nav>
        </>
    )
}
export default Navbar2