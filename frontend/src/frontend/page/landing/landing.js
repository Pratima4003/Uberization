import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import Navbar from "../../components/header/navbar";
import Navbar1 from "../../components/header/navbar1";

export default function Landing() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    const imageStyle = {
        width: '100%',
        height: '500px', // set a fixed height for the images
        objectFit: 'cover' // ensures the images cover the area without distortion
    };

    return (
        <div className="sticky-navbar" style={{backgroundColor: "gray", height:"auto"}}>
            <Navbar1 />
            <div style={{ width: '90%', margin: '0 auto'}}>
                <Slider {...settings}>
                    <div>
                        <img 
                            src="https://images.pexels.com/photos/1046227/pexels-photo-1046227.jpeg?cs=srgb&dl=pexels-osho-1046227.jpg&fm=jpg" 
                            alt="Image 1" 
                            style={imageStyle}
                        />
                    </div>
                    <div>
                        <img 
                            src="https://media.cnn.com/api/v1/images/stellar/prod/230314215301-03-world-best-airports-2023.jpg?c=original" 
                            alt="Image 2" 
                            style={imageStyle}
                        />
                    </div>
                    <div>
                        <img 
                            src="https://i.pinimg.com/736x/ef/75/1d/ef751d3f8e4e48bc5ee07def3982ac69.jpg"
                            alt="Image 3" 
                            style={imageStyle}
                        />
                    </div>
                    <div>
                        <img 
                            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201210/metro-6_660_101012103430.jpg?VersionId=mc9Xt_ympuerkSEUiZK0skysueLZEbad" 
                            alt="Image 4" 
                            style={imageStyle}
                        />
                    </div>
                </Slider>
            </div>
        </div>
    );
}
