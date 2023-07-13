import React, { useEffect } from 'react'
import '../Style/Subpro.css';
import Navbar from '../Component/Navbar2';
import Footer from '../Component/Footer';
import bedroom from "../Assets/badroom.jpeg"

function Subpro() {

    const id1 = JSON.parse(sessionStorage.getItem('image_link'))

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <Navbar />
            <div className="container12">
                <div className='routing'>
                    {/* <div className='flexRouting'>
                        <Link to="/">Home <i className="fa-solid fa-chevron-right"></i></Link>
                        <Link to="/">property in gurgaon <i className="fa-solid fa-chevron-right"></i> </Link>
                        <Link to>builder floor in gurgaon <i className="fa-solid fa-chevron-right"></i> </Link>
                        <Link to>builder floor in sector 65 gurgaon <i className="fa-solid fa-chevron-right"></i> </Link>
                        <Link to>3 BHK builder floor in sector 65 gurgaon  <i className="fa-solid fa-chevron-right"></i> </Link>
                    </div> */}
                    <div className='DateRouting'>
                        <span>posted on {id1.date_created.split(' ')[0]}</span>
                    </div>
                </div>
                <div className='box-area'>
                    <div className='box-img'>
                        <img src={require('../Assets/first.jpeg')} alt="" className='img-fluid' />
                    </div>
                    <div>
                        <h2>advertisment area</h2>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container12">
                <div className='img-area'>
                    <div className='img-box'>
                        {/* <img src={id1.image_link === null ? { bedroom } : id1.image_link} alt="" className='img-fluid' /> */}
                        {id1.image_link ? <img src={`http://localhost:5000/${id1.image_link}`} alt="" className='img-fluid' /> : <img src={bedroom} alt="" className='img-fluid' />}
                    </div>
                    <div>
                        <h1>{id1.propertyName}</h1>
                        <p className='propertytype'>Property Type: <span>{id1.property_type}</span></p>
                        <p className='propertytype'>Property Size: <span>{id1.property_size} {id1.measurement_unit}</span></p>
                        <p className='propertytype'>Property Listing Value: <span>{id1.property_listing_value}</span></p>
                        {id1.builder_name === null ? null : <p className='propertytype'>Builder Name: <span>{id1.builder_name}</span></p>}
                        {id1.owner_name === null ? null : <p className='propertytype'>Owner Name: <span>{id1.owner_name}</span></p>}
                        {id1.property_listing_status === null ? null : <p className='propertytype'>Property Listing Status: <span>{id1.property_listing_status}</span></p>}
                        {id1.available_date === null ? null : <p className='propertytype'>Available Date: <span>{id1.available_date}</span></p>}
                    </div>
                </div>
                <div className='box-area'>
                    <div className='box-img'>
                        <img src={require('../Assets/first.jpeg')} alt="" className='img-fluid' />
                    </div>
                    <div>
                        <h2>advertisment area</h2>
                    </div>
                </div>
                <div className='property'>
                    <p className='pp-name'>Why you should consider this property?</p>
                </div>
                {/* <div className='highlights'>
                    <div className='key-highlights'>
                        <h5>Key Highlights  </h5>
                        <span>Of The Property</span>
                    </div>
                    <div className='key-property'>
                        <ul>
                            <li> <i className="fa-solid fa-check "></i>overlooking park/garden</li>
                            <li> <i className="fa-solid fa-check "></i>Club/ Community Center</li>
                            <li> <i className="fa-solid fa-check "></i>Gated Society</li>
                            <li> <i className="fa-solid fa-check "></i>East Facing</li>
                        </ul>
                    </div>
                </div> */}
                <hr />
                <div className='about-property'>
                    <h2>About Property</h2>
                    <p>Address: {id1.address1},{id1.address2}, {id1.area},{id1.city}, {id1.state} <br />
                        {/* 1. Unique property (Jemma block) facing the length of the park. 2. On the widest road of jemma block (15 meters). 3. Cross ventilation and not facing any floor/house in the front or back. Unobstructed view. 4. Front park facing terrace. 5. Additional benefit of parking space on the side of the park... */}</p>
                </div>
                <hr />
                <div className='about-property'>
                    <div>
                        <h6>Furnishing Details</h6>
                        <div className="container text-center">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-6">
                                {id1.total_floors === null ? null : <div className="col">{id1.total_floors} Total Floors</div>}
                                {id1.floor_no === null ? null : <div className="col">{id1.floor_no} Floor No</div>}
                                {id1.bed === null ? null : <div className="col">{id1.bed} Bed</div>}
                                {id1.bath === null ? null : <div className="col">{id1.bath} Bath</div>}
                                {id1.cabins === null ? null : <div className="col">{id1.cabins} Cabins</div>}
                                {id1.workstations === null ? null : <div className="col">{id1.workstations} Workstations</div>}
                                {id1.confrence === null ? null : <div className="col">{id1.confrence} Confrence</div>}
                                {id1.pantry === null ? null : <div className="col">{id1.pantry} Pantry</div>}
                                {id1.kitchen === null ? null : <div className="col">{id1.kitchen} Kitchen</div>}
                                {id1.amenities === null ? null : <div className="col">{id1.amenities} Amenities</div>}
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                {/* <div className='about-property'>
                    <h2 >Features</h2>
                    <div>
                        <div className="container text-center">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-6">
                                <div className="col">Security / Fire Alarm</div>
                                <div className="col">Feng Shui / Vaastu Compliant</div>
                                <div className="col">Private Garden / Terrace</div>
                                <div className="col">Intercom Facility</div>
                                <div className="col">Water purifier</div>
                                <div className="col">Lift(s)</div>
                                <div className="col">High Ceiling Height</div>
                                <div className="col">Maintenance Staff</div>
                                <div className="col">Water Storage</div>
                                <div className="col">Piped-gas</div>
                                <div className="col">Visitor Parking</div>
                                <div className="col">Swimming Pool</div>
                                <div className="col">Park</div>
                                <div className="col">Security Personnel</div>
                                <div className="col">Airy Rooms</div>
                                <div className="col">Fitness Centre / GYM</div>
                                <div className="col">Waste Disposal</div>
                                <div className="col">Rain Water Harvesting</div>
                                <div className="col">Club house / Community Center</div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <Footer />
        </>
    )
}
export default Subpro