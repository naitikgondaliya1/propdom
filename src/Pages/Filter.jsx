import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Style/Filter.css'
import Footer from '../Component/Footer'
import PropertyCard from '../Pages/Property';
import MultiRangeSlider from '../Pages/MultiRangeSlider'
import apiConst from '../GlobalConst/ApiKeys'
import ApiCall from '../GlobalConst/ApiCall'

function Filter() {

    const [min1, setmin] = useState(100000);
    const [max1, setmax] = useState();
    const [min2, setmin2] = useState();
    const [max2, setmax2] = useState();

    const [filterData, setFilterData] = useState()

    const sectorData = localStorage.getItem('sectorData');
    const areaData = localStorage.getItem('areaData');
    const cityData = localStorage.getItem('cityData');

    const [searchData, setsearchData] = useState([])
    // const [category, setCategory] = useState([]);
    const [BHK, setBHK] = useState("")
    const [upperStatus, setUpperStatus] = useState("")

    const shortData = (e) => {
        let search = e.target.value;
        let fData = searchData?.filter((item) => item?.area?.toLowerCase().indexOf(search?.toLowerCase()) !== -1)
        setFilterData(fData);
    }

    // ------------- get data --------------------
    const search = useCallback(() => {
        var data = {
            area: sectorData.split(','),
            city: areaData.split(','),
            state: cityData.split(','),

        };

        ApiCall("post", apiConst.search, data, null, null)
            .then(function (response) {
                setsearchData(response.data.property)
                setFilterData(response.data.property)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [areaData, sectorData, cityData])

    // ------------- get data --------------------

    const [currentPage, setCurrentPage] = useState(1);
    const [propertiesPerPage] = useState(10);

    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;

    const totalPages = Math.ceil(filterData?.length / propertiesPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        let tempFilterData = filterData

        if (upperStatus) {
            tempFilterData = searchData?.filter((item) => (item.sale_price >= min1 && item.sale_price <= max1) && (item.property_size >= min2 && item.property_size <= max2) && item.property_status === upperStatus);
        }
        else if (BHK) {
            tempFilterData = searchData?.filter((item) => (item.sale_price >= min1 && item.sale_price <= max1) && (item.property_size >= min2 && item.property_size <= max2) && item.bed === BHK);
        }
        else {
            tempFilterData = searchData?.filter((item) => (item.sale_price >= min1 && item.sale_price <= max1) && (item.property_size >= min2 && item.property_size <= max2));
        }
        setFilterData(tempFilterData)
    }, [BHK, min1, max1, min2, max2, upperStatus])

    const onSearch = (min, max) => {
        setmin(min)
        setmax(max)
    };

    const hello1 = (min, max) => {
        setmin2(min)
        setmax2(max)
    };

    const [activeTag1, setActiveTag1] = useState();
    const allBhk = (value, tabIndex1) => {
        setBHK(value)
        setActiveTag1(tabIndex1);
    };

    const status = (value, tabIndex) => {
        setUpperStatus(value);
        setActiveTag(tabIndex);
    };


    const allList = () => {
        ApiCall("get", apiConst.list, null, null, null)
            .then(function (response) {
                // setCategory(response.data.category)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const onClick = () => {
        window.location.reload();
    }

    const allsector = localStorage.getItem('sectorData').split(',');
    const [activeTag, setActiveTag] = useState();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        search();
        allList();
    }, [search]);

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
                            <input type="text" className='' placeholder='Search By Locality' onChange={shortData} />
                            <i className="fa-solid fa-magnifying-glass search-123"></i>
                        </div>
                        <div className="pokl">
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/CustomerService">Customer Service</Link></li>
                            <li><Link to="/plans">Plans</Link></li>
                            <li style={{ border: "none" }}><i className="orange fa-solid fa-bell"></i></li>
                        </div>
                    </ul>
                    <Link to='/'><img src={require("../Assets/R.png")} alt="" className="logo123" /></Link>
                </div>
            </nav>
            <section className='section-y'>
                <div className="container12">
                    <div className='flex'>

                        {/* Filter */}

                        <div className='sidebar'>
                            <div className='flex justify-content align-items'>
                                <h6 className='a-f'>Applied Filters</h6>
                                <Link to="#" onClick={onClick}>clear all</Link>
                            </div>
                            {allsector?.map((item, index) => (
                                <div key={index}>
                                    <div className="allthesector"> {item}</div>
                                </div>
                            ))}
                            <div>
                                <span>Budget</span>
                                <div className='min-max-flex'>
                                    <h6 className='budget-btn'>₹{min1}</h6>
                                    <h6 className='budget-btn'>₹{max1}</h6>
                                </div>
                                <div className='min-max'>
                                    <div className="inner-div">
                                        <MultiRangeSlider min={100000} max={100000000} onChange={onSearch} />
                                    </div>
                                </div>
                            </div>
                            <hr />
                            {/* <h6>Property Type</h6>
                            <div className='property-btn' style={{ cursor: "pointer" }}>
                                {
                                    category?.map((item, i) => (
                                        <div key={i} >
                                            <div>{item?.name}</div>
                                        </div>
                                    ))
                                }
                            </div>
                            <hr /> */}
                            <h6>No. of Bedrooms</h6>
                            <div className='bedrooms-btn'>
                                <div className={activeTag1 === 0 ? 'active-filter1' : ''} style={{ cursor: "pointer" }} onClick={() => allBhk('1', 0)}>1BHK</div>
                                <div className={activeTag1 === 1 ? 'active-filter1' : ''} style={{ cursor: "pointer" }} onClick={() => allBhk('2', 1)}>2BHK</div>
                                <div className={activeTag1 === 2 ? 'active-filter1' : ''} style={{ cursor: "pointer" }} onClick={() => allBhk('3', 2)}>3BHK</div>
                                <div className={activeTag1 === 3 ? 'active-filter1' : ''} style={{ cursor: "pointer" }} onClick={() => allBhk('4', 3)}>4BHK</div>
                                <div className={activeTag1 === 4 ? 'active-filter1' : ''} style={{ cursor: "pointer" }} onClick={() => allBhk('5', 4)}>5BHK</div>
                            </div>
                            <hr />
                            {/* <h6>Posted by</h6>
                            <div className='posted-btn'>
                                <div>owner</div>
                                <div>builder</div>
                                <div>dealer</div>
                                <div>feature dealer</div>
                            </div>
                            <hr /> */}
                            <div>
                                <span>Area <br />sq.ft.</span>
                                <div className='min-max-flex'>
                                    <h6 className='budget-btn'>{min2}0sq.ft.</h6>
                                    <h6 className='budget-btn'>{max2}+ sq.ft.</h6>
                                </div>
                                <div className="min-max">
                                    <MultiRangeSlider min={0} max={1000} onChange={hello1} />
                                </div>
                            </div>
                            <hr />
                            {/* <h6>Localities</h6>
                            <div className='posted-btn'>
                                <div>owner</div>
                                <div>builder</div>
                                <div>dealer</div>
                                <div>feature dealer</div>
                            </div> */}
                        </div>

                        {/* Filter */}

                        <div className='right-card'>
                            <div className='category-btn'>
                                {/* <button className={activeTag === 0 ? 'active-filter' : ''} onClick={() => status('All', 0)}>
                                    all
                                </button> */}
                                <button
                                    className={activeTag === 1 ? 'active-filter' : ''}
                                    onClick={() => status('Owner', 1)}
                                >
                                    owner
                                </button>
                                <button
                                    className={activeTag === 2 ? 'active-filter' : ''}
                                    onClick={() => status('Verified', 2)}
                                >
                                    verified
                                </button>
                                <button
                                    className={activeTag === 3 ? 'active-filter' : ''}
                                    onClick={() => status('UnderConstruction', 3)}
                                >
                                    under construction
                                </button>
                                <button
                                    className={activeTag === 4 ? 'active-filter' : ''}
                                    onClick={() => status('ReadyToMove', 4)}
                                >
                                    ready to move
                                </button>
                            </div>

                            <div>
                                {
                                    filterData?.length === 0 ?
                                        <div style={{ fontSize: "24px", textAlign: "center", color: "red", margin: "10px 0" }}>No Data</div> :
                                        filterData?.slice(indexOfFirstProperty, indexOfLastProperty)?.map((property, index) => (
                                            <PropertyCard key={index} property={property} />
                                        ))
                                }

                                {/* Pagination */}
                                <div className="pagination">
                                    {Array.from({ length: totalPages })?.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => paginate(index + 1)}
                                            className={currentPage === index + 1 ? 'active' : 'pagi'}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Filter