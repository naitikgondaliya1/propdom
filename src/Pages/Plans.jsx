import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import "../Style/Plans.css";
import Footer from "../Component/Footer";
import axios from "axios"
import apiConst from "../GlobalConst/ApiKeys";

const Plans = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    allThePlans();
  }, []);

  const [allPlans, setAllPlans] = useState();
  const [allPlans1, setAllPlans1] = useState();
  const [allPlans2, setAllPlans2] = useState();

  const allThePlans = () => {
    var config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: apiConst.getallplans,
      headers: {
        'authToken_user': localStorage.getItem('User_token'),
      }
    };

    axios(config)
      .then(function (response) {
        setAllPlans(response.data.getPlans[0]);
        setAllPlans1(response.data.getPlans[1]);
        setAllPlans2(response.data.getPlans[2]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <Navbar />
      <div>
        {" "}
        <section>
          <div className="cards_section container-fluid">

            <div className="card">
              <div className="card_top">
                <div className="listing-badges">
                  <span className="featured">Featured</span>
                </div>
                <p>{allPlans?.name}</p>
                <h1>₹{allPlans?.sale_price}.00</h1>
              </div>
              <div className="card_bottom">
                <p>Validity : {allPlans?.package_validity}</p> <hr />
                <p> Sale Price : ₹{allPlans?.sale_price}</p> <hr />
                <p>GST : ₹ {allPlans?.Gst_price}</p> <hr />
                <p>
                  <b>Total Amount : ₹ {allPlans?.total_amount}</b>
                </p>
                <hr />
                <p>Top Broker : No</p> <hr />
                <p>Can Request For Property : No</p> <hr />
                <p>Has Profile : Yes</p> <hr />
                <p>Live Property View : No</p> <hr />
              </div>
              <button>BUY NOW</button>
            </div>

            <div className="card">
              <div className="card_top">
                <div className="listing-badges">
                  <span className="featured">Featured</span>
                </div>
                <p>{allPlans1?.name}</p>
                <h1>₹{allPlans1?.sale_price}.00</h1>
              </div>
              <div className="card_bottom">
                <p>Validity : {allPlans1?.package_validity}</p> <hr />
                <p> Sale Price : ₹{allPlans1?.sale_price}</p> <hr />
                <p>GST : ₹ {allPlans1?.Gst_price}</p> <hr />
                <p>
                  <b>Total Amount : ₹ {allPlans1?.total_amount}</b>
                </p>
                <hr />
                <p>Top Broker : No</p> <hr />
                <p>Can Request For Property : No</p> <hr />
                <p>Has Profile : Yes</p> <hr />
                <p>Live Property View : No</p> <hr />
              </div>
              <button>BUY NOW</button>
            </div>

            <div className="card">
              <div className="card_top">
                <div className="listing-badges">
                  <span className="featured">Featured</span>
                </div>
                <p>{allPlans2?.name}</p>
                <h1>₹{allPlans2?.sale_price}.00</h1>
              </div>
              <div className="card_bottom">
                <p>Validity : {allPlans2?.package_validity}</p> <hr />
                <p> Sale Price : ₹{allPlans2?.sale_price}</p> <hr />
                <p>GST : ₹ {allPlans2?.Gst_price}</p> <hr />
                <p>
                  <b>Total Amount : ₹ {allPlans2?.total_amount}</b>
                </p>
                <hr />
                <p>Top Broker : No</p> <hr />
                <p>Can Request For Property : No</p> <hr />
                <p>Has Profile : Yes</p> <hr />
                <p>Live Property View : No</p> <hr />
              </div>
              <button>BUY NOW</button>
            </div>


          </div>
        </section>
      </div >
      <Footer />
    </>
  );
};

export default Plans;
