import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../Style/Filter.css"
import image from "../Assets/R.png"
import apiConst from '../GlobalConst/ApiKeys';
import ApiCall from '../GlobalConst/ApiCall';

const Property = ({ property }) => {
    // image_link
    const { area, measurement_unit, owner_name, propertyName, original_price, sale_price, property_size, size, superBuiltUpArea, _id } = property;
    const [h1, seth1] = useState()
    console.log(h1);
    const navi = useNavigate();
    const onId = (id) => {
        sessionStorage.setItem('image_link', JSON.stringify(id))
        console.log(id);
        // navi("/subpro")
    }

    const [contact, setcontact] = useState("Contact Delader")

    const contactD = (id) => {
        ApiCall("post", apiConst.checkisSubscribed + id, null, null, null)
            .then(function (response) {
                if (response.data.isSubscribed === true) {
                    setcontact(response.data.ownerContact);
                }
                else {
                    alert('Subscribe First')
                    navi('/plans')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const please = () => {
        alert('Please Login First');
        navi('/login')
    }

    const finalF = () => {
        if (localStorage.getItem("User_token")) {
            contactD(_id)
        }
        else {
            please()
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        const helloooo = localStorage.getItem('propertyData')
        seth1(JSON.parse(helloooo))
    }, []);

    return (
        <div className="allBorder">
            <div className="flex">
                <div className="img-card" style={{ cursor: "pointer" }} onClick={() => onId(property)}>
                    <div className="card-pic">
                        <img src={image} alt="image_link" className="img-fluid" />
                    </div>
                </div>
                <div className="card-information">
                    <div className='p-tag' style={{ cursor: "pointer" }} onClick={() => onId(property)}>{area}</div>
                    <p className='p-name' style={{ cursor: "pointer" }} onClick={() => onId(property)}>{propertyName}</p>
                    <div className="flex gap" style={{ cursor: "pointer" }} onClick={() => onId(property)}>
                        <div className='main-price'>
                            <div className="both-price">
                                <div className='original_price'> Original Price: <span>₹{original_price}</span></div>
                                <br />
                                <div className='original_price'> Sale Price: <span>₹{sale_price}</span></div>
                                <br />
                            </div>
                            <div className='original_price'> Property Size: <span>{property_size} {measurement_unit}</span></div>
                        </div>
                        <div>
                            <h6 className="text-center">{size}</h6>
                            <span className='main-span'>{superBuiltUpArea}</span>
                        </div>
                    </div>
                    <br />
                    <hr />
                    <div className="flex justify-content align-items">
                        <button className="btn-contact2">View Phone Number</button>
                        <div className="btn-contact1" style={{ cursor: "pointer" }} onClick={finalF}>{contact}</div>
                    </div>
                    <div>
                        <p className='on'>Owener Name: {!owner_name ? "landDam" : owner_name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Property