import React from 'react';
import "../Style/Home.css"
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';


const ImageSlider = ({ images }) => {
    console.log(images);

    const options = {
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000
    };

    return (
        <div className="slider-part">
            <OwlCarousel options={options}>
                {images?.map((item, i) => (
                    <div className="allinslider" key={i}>
                        <img className="slider-img" src={item.img} alt="img" />
                        <div className="dummy-tag">
                            <h3>{item.title}</h3>
                            <span style={{ color: "white" }}>{item.desc}</span>
                        </div>
                    </div>
                ))}
            </OwlCarousel>
        </div>
    );
};

export default ImageSlider;
