import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import "../Style/Home.css"
import ImageSlider from './ImageSlider'
import Footer from '../Component/Footer'
import Select from 'react-select'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import apiConst from '../GlobalConst/ApiKeys'
import ApiCall from '../GlobalConst/ApiCall'

const Home = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    allList();
    allthelist();
    slider();
  }, []);

  const [activeTag, setActiveTag] = useState();
  const [category, setCategory] = useState([]);
  const [property, setProperty] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const allList = () => {
    var config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: apiConst.list,
      headers: {}
    };

    axios(config)
      .then(function (response) {
        setCategory(response.data.category)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const allPropertyList = (categoryId) => {
    var config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${apiConst.pro_types}=${categoryId}`,
      headers: {}
    };
    axios(config)
      .then(function (response) {
        setProperty(response.data.propertyType)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const [allSlider, serAlllider] = useState([])
  console.log(allSlider[0]?.title);

  const slider = () => {
    ApiCall("get", apiConst.addSlider, null, null, null)
      .then(function (response) {
        serAlllider(response.data.sliders)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const [disablebtn, setdisablebtn] = useState(true)

  const handleClick = (tabIndex, categoryId) => {
    setActiveTag(tabIndex);
    allPropertyList(categoryId);
    setdisablebtn(false)
  }

  const allthelist = () => {
    ApiCall("get", apiConst.pro_list, null, null, null)
      .then(function (response) {
        const fetchedOptions = response.data.property[0].property.map((item, index) => ({
          value: index,
          label: item
        }));
        setOptions(fetchedOptions);
      })
      .catch(error => {
        console.error('Error fetching options:', error);
      });
  }

  const [sector, setSector] = useState([]);
  const [area, setArea] = useState([]);
  const [city, setCity] = useState([]);

  let newSector = [];
  let newArea = [];
  let newCity = [];

  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);


    for (let index = 0; index < selectedOptions.length; index++) {
      const element = selectedOptions[index].label;
      const [sector12, area12, city12] = element.split(', ');

      newSector.push(sector12)
      newArea.push(area12)
      newCity.push(city12)

      setSector(newSector);
      setArea(newArea);
      setCity(newCity);
    }
  };

  const saveDataToLocalStorage = () => {
    localStorage.setItem('sectorData', sector);
    localStorage.setItem('areaData', area);
    localStorage.setItem('cityData', city);
  };

  const filterPage = async (e) => {
    e.preventDefault();
    saveDataToLocalStorage();
    window.location.href = "/filter"
  }

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="main-div-home">
        <div className='banner-img'>
          <img src={require("../Assets/city2.jpg")} alt=" " />
        </div>
        <div className="center-btns">
          {
            category?.map((item, i) => (
              <div key={i} >
                <div onClick={() => handleClick(i, item._id)} className={activeTag === i ? 'all-btns-active' : 'all-btns'} >{item?.name}</div>
              </div>
            ))
          }
        </div>
        <div className="bottom-side">
          <form className="display-flex-bottom" onSubmit={filterPage}>
            <div className="dropdown" id="valueItemDrop">
              <button className="selectbox" id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false" disabled={disablebtn ? true : ""}>
                All Property Types <i className="fa-solid fa-angle-down"></i>
              </button>
              {
                property.length > 0 &&
                <ul className="dropdown-menu dp" aria-labelledby="dLabel">
                  {
                    property.map((item) => {
                      return (
                        <li key={item?._id} className="checkbox form-group">
                          <input type="checkbox" id={item?._id} value={item?.name} name={item?.name} />
                          <label className='lebel123' htmlFor={item?._id}>{item?.name}</label>
                        </li>
                      )
                    })
                  }
                </ul>
              }
            </div>
            <div className='upper-home'>
              <div className='search-p'>
                <Select options={options} isMulti required onChange={handleSelectChange} />
              </div>
              <button className='search'>Search</button>
            </div>
          </form>
        </div>
        {/* {
          allSlider?.map((item, index) => {
            <div key={index}>
              <p>{item[0]?.title}</p>
            </div>
          })
        } */}
        <ImageSlider images={allSlider} />
      </div>
      <Footer />
    </>
  )
}

export default Home